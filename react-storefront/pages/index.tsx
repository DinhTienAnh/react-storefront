import React from 'react';
import {ProductCollection} from 'components/ProductCollection';
import {Layout} from 'components/Layout'
import { Pagination } from '~/components/Pagination';
import clsx from 'clsx';
import { ProductElement } from 'components/ProductElement';

const navigation = [
  { name: 'Products', href: '#', current: true },
  { name: 'Wishlist', href: '#', current: false },
]

const styles = {
  background: "min-h-screen bg-gray-100",
  container: "py-10 max-w-7xl mx-auto",
};

const Home = () => {
  return (
    <Layout>
        <ProductCollection />
    </Layout>
  );
};

export default Home;







