import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ loadMore, isLastPage }) {
    return (
        <div className={css.loadMore}>
            <button onClick={loadMore} disabled={isLastPage}>Load more</button>
        </div>
    )
}