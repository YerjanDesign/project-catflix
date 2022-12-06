import create from "zustand";
import { nanoid } from "nanoid";

const useReviewStore = create((set) => ({
  reviews: [
    { id: 1, name: "Sama Jabri", date: "Nov 23, 2022", src: 'userImage.svg', content: "Spider-Man: No Way Home is a phenomenal conclusion to the trilogy and Holland's best outing as Spidey yet. Starts off fun, safe and familiar and then becomes extremely emotional, satisfying and full of great callbacks. A love letter to all things Spider-Man." },
    { id: 2, name: "Mozart", date: "Dec 2, 2022", src: '', content: "Spider-Man: No Way Home is a phenomenal conclusion to the trilogy and Holland's best outing as Spidey yet. Starts off fun, safe and familiar and then becomes extremely emotional, satisfying and full of great callbacks. A love letter to all things Spider-Man." },
    { id: 3, name: "Alvaro", date: "Jan 15, 2022", src: 'userImage.svg', content: "Spider-Man: No Way Home is a phenomenal conclusion to the trilogy and Holland's best outing as Spidey yet. Starts off fun, safe and familiar and then becomes extremely emotional, satisfying and full of great callbacks. A love letter to all things Spider-Man." },
    { id: 4, name: "Alvaro", date: "Jan 15, 2022", src: '', content: "Spider-Man: No Way Home is a phenomenal conclusion to the trilogy and Holland's best outing as Spidey yet. Starts off fun, safe and familiar and then becomes extremely emotional, satisfying and full of great callbacks. A love letter to all things Spider-Man." },
    { id: 5, name: "Alvaro", date: "Jan 15, 2022", src: 'userImage.svg', content: "Spider-Man: No Way Home is a phenomenal conclusion to the trilogy and Holland's best outing as Spidey yet. Starts off fun, safe and familiar and then becomes extremely emotional, satisfying and full of great callbacks. A love letter to all things Spider-Man." },
  ],
  createReview: (content) =>
    set((state) => ({
      reviews: [...state.reviews, { id: nanoid(), content }],
    })),
  deleteReview: (reviewId) =>
    set((state) => ({
      reviews: state.reviews.filter((review) => review.id !== reviewId),
    })),
  updateReview: (reviewId, content) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              content,
            }
          : review
      ),
    })),
}));

export default useReviewStore;
