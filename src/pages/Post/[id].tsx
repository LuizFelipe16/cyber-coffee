import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { RichText } from 'prismic-dom';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt, FaLongArrowAltLeft } from 'react-icons/fa';

import { Footer } from '../../components/Footer';
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    description: string;
    author: string;
    content: {
      heading: string;
      body: string;
    }[];
  };
}

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.data.title} | CyberCoffee</title>
      </Head>

      <Link href="/Blog">
        <a className={styles.back_page}>
          <FaLongArrowAltLeft />
        </a>
      </Link>

      <div className={styles.welcome}>
        <div className={styles.texts}>
          <h1>{post.data.title}</h1>
          <p>
            {post.data.description}
          </p>
        </div>

        <img src={post.data.banner.url} alt={post.data.title} />
      </div>

      <div className={styles.post}>
        <div className={styles.content}>
          <h1 className={styles.post_title}>{post.data.title}</h1>
          <hr />
          <div className={styles.post_information}>
            <h2><FaUserAlt /> {post.data.author}</h2>
            <time><BsCalendar2WeekFill /> {post.first_publication_date}</time>
          </div>

          {post.data.content.map(content => (
            <div key={content.heading} className={styles.body_post}>
              <h1>{content.heading}</h1>
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { id } = params as any;

  const response = await prismic.getByUID('post', String(id), {});

  const post = {
    first_publication_date: new Date(String(response.first_publication_date)).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url
      },
      description: response.data.description,
      author: response.data.author,
      content: response.data.content.map((content: any) => {
        return {
          heading: content.heading,
          body: RichText.asHtml(content.body)
        }
      })
    }
  }

  return {
    props: {
      post
    }
  }
};

export default Post;