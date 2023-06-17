function ProductCategoryRow({category}){
  return(
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
  )
}

function ProductRow({name,price,stocked}){
  const pname=stocked?name:<span style={{color:'red'}}>{name}</span>
  return(
      <tr>
        <td>{pname}</td>
        <td>{price}</td>
      </tr>
  )
}


function ProductTable({products}){
  const Row = [];
  let lastCategory=null;

  products.forEach((product) => {
    // console.log(product.category)
    if(product.category!==lastCategory){
      Row.push(<ProductCategoryRow category={product.category} key={product.category}/>)
    }
    Row.push(
      <ProductRow name={product.name} price={product.price} key={product.name} stocked={product.stocked}/>
    )
    lastCategory=product.category
  });

  return(
    <>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{Row}</tbody>
      </table>
    </>
  )
}

function SearchBar(){
  return(
    <>
      <input type="text" placeholder="Search..."/><br/>
      <label>
      <input type="checkbox"/>{' '}Only Show Products in Stock<br/>
      </label>
    </>
  )
}

function FilterableProductTable({products}){
  return(
    <>
    <SearchBar/>
    <ProductTable products={products}/>
    </>
  );
}

const JSONfile=[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default function app(){
  return(
    <FilterableProductTable products={JSONfile}/>
  );
}