/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white  p-4 m-4 rounded"  >
            <h2 className="text-xl" >{title}</h2>
        </div>
    );
};

export default Bookmark;