import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Article } from '@/types/article';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const articlesQuery = query(
      collection(db, 'articles'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const articlesData: Article[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        articlesData.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        } as Article);
      });
      setArticles(articlesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addArticle = async (articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await addDoc(collection(db, 'articles'), {
        ...articleData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error adding article:', error);
      throw error;
    }
  };

  const updateArticle = async (id: string, articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const articleRef = doc(db, 'articles', id);
      await updateDoc(articleRef, {
        ...articleData,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating article:', error);
      throw error;
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'articles', id));
    } catch (error) {
      console.error('Error deleting article:', error);
      throw error;
    }
  };

  return {
    articles,
    loading,
    addArticle,
    updateArticle,
    deleteArticle,
  };
};