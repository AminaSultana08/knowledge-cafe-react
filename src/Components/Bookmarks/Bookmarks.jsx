/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 ">
        <div>
             <h2 className="text-2xl">Reading Time: {readingTime}</h2>
         </div>
            <h2  className="text-3xl text-center  ">Bookmarks Blogs : {bookmarks.length} </h2>
           
            <div>
            {
                bookmarks.map( (bookmark,idx) => <Bookmark key={idx}  bookmark={bookmark} ></Bookmark> )
            }
            </div>
        </div>
    );
};

export default Bookmarks;