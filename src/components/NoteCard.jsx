import React from "react";
import { showFormattedDate } from '../utils/index'

function NoteCard({ id, title, body, createdAt, onDelete, buttonData, changeButton }) {
  return (
    <div className="note">
        <div className="note-header mb-2">
            <h1 className="fw-bold">{title}</h1>
            <span>{showFormattedDate(createdAt)}</span>
        </div>
        <p className="mb-2">
            {body}
        </p>
        <div className="note-btns">
            <button onClick={() => onDelete(id)} className="text-danger fw-medium">
                Hapus
            </button>
            <button onClick={() => buttonData(id)} className="text-warning fw-medium">
                {changeButton}
            </button>
        </div>
    </div>   
  );
}

export default NoteCard;
