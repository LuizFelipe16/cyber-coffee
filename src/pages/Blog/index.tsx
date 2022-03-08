import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

import styles from './styles.module.scss';
import { RichText } from 'prismic-dom';

const posts = [
  {
    id: 1,
    img: 'https://www.42frases.com.br/wp-content/uploads/2021/03/frases-de-cafe-tumblr.png',
    title: 'Benefícios na Saúde',
    description: 'O café é uma das matérias-primas com maior importância no comércio internacional. É igualmente uma das bebidas mais apreciadas em todo mundo, não só pelas suas características organolépticas, mas também pelo seu efeito estimulante. Dado o seu elevado e distribuído consumo, os potenciais efeitos na saúde causados por esta bebida suscitaram, desde cedo, o interesse da comunidade científica.',
    created_at: '10/10/21',
    author: 'Luiz Felipe'
  },
  {
    id: 2,
    img: 'https://s2.glbimg.com/qkeXIALH7cUgPeJe8McQ-nrDxaY=/e.glbimg.com/og/ed/f/original/2017/03/31/cafe.png',
    title: 'O Café Perfeito',
    description: 'Como fazer um delicioso café com aroma de frescor para sua manhã ser bela e muito melhor.',
    created_at: '10/10/21',
    author: 'Luiz Felipe'
  },
  {
    id: 3,
    img: 'https://menshealth.pt/files/2019/12/iStock-947694978.jpg',
    title: 'Aroma Frescor?',
    description: 'Como fazer um delicioso café com aroma de frescor para sua manhã ser bela e muito melhor.',
    created_at: '10/10/21',
    author: 'Luiz Felipe'
  },
];

interface Post {
  uid?: string;
  first_publication_date: string;
  data: {
    title: string;
    description: string;
    banner: {
      url: string;
    };
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface BlogProps {
  postsPagination: PostPagination;
}

const Blog = ({ postsPagination }: BlogProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | CyberCoffee</title>
      </Head>

      <Navbar isBlogActive />

      <div className={styles.welcome}>
        <div className={styles.texts}>
          <h1>Blog, conteúdo para amantes do café</h1>
          <p>
            Veja alguns posts escritos para você exclusivamente <br />
            sobre cafés, você vai aprender a fazer e
            ira ver <br /> vários outros conteúdos.
          </p>
          <Link href="/Coffees" passHref>
            <button type="button">
              Ver Cafés
            </button>
          </Link>
        </div>

        <img src='/blog-img.png' alt="Cafés" />
      </div>

      <div className={styles.posts}>
        {postsPagination.results.map(post => (
          <div key={post.uid} className={styles.post}>
            <img src={post.data.banner.url} alt={post.data.title} />

            <div className={styles.content}>
              <h1>{post.data.title}</h1>
              <div>
                <h2><FaUserAlt /> {post.data.author}</h2>
                <time><BsCalendar2WeekFill /> {post.first_publication_date}</time>
              </div>
              <p>{post.data.description}</p>
            </div>

            <Link href={`/Post/${post.uid}`}>
              <button type="button">
                Ver Post
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')
  ], {
    pageSize: 20
  });

  const posts = postsResponse?.results?.map(post => {
    return {
      uid: post.uid,
      first_publication_date: new Date(String(post.first_publication_date)).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      data: {
        title: post.data.title,
        description: post.data.description,
        author: post.data.author,
        banner: post.data.banner
      }
    }
  });

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: posts
      }
    }
  }
};

export default Blog;