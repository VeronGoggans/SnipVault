from data.database import Database
from data.models import Snippet, Tag
from sqlalchemy.orm import Session
from utils import clear_screen
from rich.console import Console
from formatter.snippet_styling import all_snippets, search_result
from formatter.snippet_styling import format_snippet_record


console = Console()


def add_snippet(name: str, code: str, tags: list, language='python'):
    session: Session = next(Database.get_db())

    tag_objects = []
    for tag_name in tags:
        # Check if the tag already exists in the database
        tag = session.query(Tag).filter_by(name=tag_name).first()
        if not tag:
            # Create a new Tag if it doesn't exist
            tag = Tag(name=tag_name)
            session.add(tag)
        tag_objects.append(tag)

    snippet = Snippet(name=name, code=code, tags=tag_objects, language=language)
    session.add(snippet)
    session.commit()


def list_snippets():
    session: Session = next(Database.get_db())

    try:
        clear_screen()
        console.print(all_snippets)
        snippets = session.query(Snippet).all()

        if not snippets:
            print("No snippets found.")
            return

        # Iterate through each snippet and display it
        for snippet in snippets:
            format_snippet_record(snippet)

    except Exception as e:
        print(f"Failed to list snippets: {e}")
    finally:
        # Ensure the session is closed after the operation
        session.close()


def search_snippets(query: str, search_type: str):
    session: Session = next(Database.get_db())

    try:
        if search_type == "name":
            # Search by snippet name (title)
            snippets = session.query(Snippet).filter(Snippet.name.ilike(f"%{query}%")).all()
        elif search_type == "tags":
            # Search by snippet tags
            snippets = session.query(Snippet).join(Snippet.tags).filter(Tag.name.ilike(f"%{query}%")).all()
        else:
            print("Invalid search type. Use 'name' or 'tags'.")
            return

        if not snippets:
            print(f"No snippets found for {search_type}: '{query}'")
            return

        # Display the search results
        clear_screen()
        console.print(search_result)
        print(f"Found {len(snippets)} snippet(s) for {search_type} '{query}':")
        for snippet in snippets:
            format_snippet_record(snippet)

    except Exception as e:
        print(f"Failed to search snippets: {e}")
    finally:
        session.close()


def delete_snippet(snippet_id: int):
    session: Session = next(Database.get_db())
    try:
        snippet = session.query(Snippet).filter(Snippet.id == snippet_id).first()

        if snippet:
            session.delete(snippet)
            session.commit()
            print(f"Snippet with ID {snippet_id} deleted successfully.")
        else:
            print(f"Snippet with ID {snippet_id} not found.")
    except Exception as e:
        print(f"Error deleting snippet: {e}")
    finally:
        session.close()


def update_snippet():
    session: Session = Database.get_db()
