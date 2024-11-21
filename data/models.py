from sqlalchemy import Column, String, Integer, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


snippet_tags = Table('snippet_tags', Base.metadata,
    Column('snippet_id', Integer, ForeignKey('snippets.id'), primary_key=True),
    Column('tag_id', Integer, ForeignKey('tags.id'), primary_key=True)
)


class Snippet(Base):
    __tablename__ = 'snippets'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    code = Column(String, nullable=True)
    language = Column(String, nullable=False, default='python')
    created = Column(String, nullable=False, default=datetime.now())

    # Relation to tags
    tags = relationship('Tag', secondary=snippet_tags, back_populates='snippets')


class Tag(Base):
    __tablename__ = 'tags'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False, unique=True)

    # Relation to snippets
    snippets = relationship('Snippet', secondary=snippet_tags, back_populates='tags')
