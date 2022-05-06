import React from "react";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import { Link } from "react-router-dom";
const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section >
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <Link key={index} to={`${item.slug}`}>
                <ProductCard
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
