import classes from "./Category.module.css";
import CategoryCard from "./CategoryCard";
import { categoryInfos } from "./product_categories";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((data, index) => (
        <CategoryCard key={index} info={data} />
      ))}
    </section>
  );
}

export default Category;
