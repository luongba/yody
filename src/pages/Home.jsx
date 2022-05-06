import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import policy from "../assets/fake-data/policy";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeout={5000}
      />

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => {
              return (
                <Link key={index} to="/policy">
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              );
            })}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              // <Link to={`/catalog/${item.slug}`} key={index}>
                <ProductCard key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              // </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
