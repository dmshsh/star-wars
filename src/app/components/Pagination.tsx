interface Props {
  currentPage: number
  totalCount: number
  pageSize: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }: Props) => {
  const totalPages = Math.ceil(totalCount / pageSize)

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <div key={page} className="join">
           <button 
             className="join-item btn btn-md rounded-2xl"
             disabled={page === currentPage}
            onClick={() => onPageChange(page)}>{page}</button>
        </div>
      ))}
    
    </div>
  )
}

export default Pagination
