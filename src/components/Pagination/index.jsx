import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { proprieties } from "../../global/fake-proprieties.js";
import ReactPaginate from "react-paginate";
import CardProperty from "../../components/CardPropriety";
import "./pagination.css";

const items = proprieties;

function Items({ currentItems }) {
    return (
        <div className="render">
            {currentItems &&
                currentItems.map((item) => (
                    <div className="render-item" key={item.id}>
                        <CardProperty propriety={item} />
                    </div>
                ))}
        </div>
    );
}

const Pagination = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        /* console.log(`Loading items from ${itemOffset} to ${endOffset}`); */
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        /* console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        ); */
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                containerClassName="pagination"
                previousClassName="previous"
                breakClassName="break"
                breakLinkClassName="breaklink"
                nextClassName="next"
                activeClassName="active"
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Pagination;
