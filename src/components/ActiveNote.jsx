import React, { useEffect, useRef} from 'react';
import Masonry from 'masonry-layout';
import NoteCard from './NoteCard';

function ActiveNote({ notes, onDelete, onActive }) {
  const containerRef = useRef(null);
  let masonry;

  useEffect(() => {
    if (containerRef.current) {
      masonry = new Masonry(containerRef.current, {
        itemSelector: '.masonry-item',
      });
    }

    return () => {
      if (masonry) {
        masonry.destroy();
      }
    };
  }, [notes]);
  return (
    <div ref={containerRef} className="masonry">
        {notes.map((note, index) => (
        <div key={index} className="masonry-item">
            <NoteCard changeButton="Arsipkan" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
        </div>
        ))}
    </div>
  )
}

export default ActiveNote