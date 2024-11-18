import { useContext } from "react"
import { FilterContext } from "../Context/FilterContext"

export function useFilter() {
    const { filters, setFilters } = useContext(FilterContext);

  
    const FilterProductos = prod => {
      
        return prod.filter(item => {
            return (
                (filters.category === "all" || item.categoria === filters.category) && (filters.material === "all" || item.material === filters.material)
            )
        })

      

  }

    return { filters, setFilters, FilterProductos };

}