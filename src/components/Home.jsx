import React from 'react';

import ActiveNote from './ActiveNote';
import ArchiveNote from './ArchiveNote';


function Home({ activeDatas, archiveDatas, onActive, onArchive, onDelete }) {
    return (
    <>
        <div className="py-5">
            <h2 className="">Catatan Aktif</h2>
            {
                activeDatas.length !== 0
                    ? (<ActiveNote notes={activeDatas} onActive={onActive} onDelete={onDelete}/>)
                    : (<p>Tidak ada catatan</p>)
            }
        </div>
        <div className="py-5">
            <h2 className="">Arsip</h2>
            {
                archiveDatas.length !== 0
                    ? (<ArchiveNote notes={archiveDatas} onArchive={onArchive} onDelete={onDelete}/>)
                    : (<p>Tidak ada catatan</p>)
            }
        </div>
    </>
  );
};

export default Home;
