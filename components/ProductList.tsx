const LatestProducts =`
query ThreeProducts {
    products(first: 3, channel: "default-channel") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
export function ProductList() {
    return(
        <div>Products</div>
    )
}