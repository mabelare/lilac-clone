export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "blog-post-one",
    title: "Blog Post One",
    subtitle: "Understanding Anxiety Beyond the Surface",
    date: "Mar 11",
    image: "/Therapygroup.jpg",
    content: [
      "Anxiety doesn’t always show up as panic or obvious fear. For many adults, it appears as constant tension, racing thoughts, difficulty relaxing, or a feeling of always needing to stay alert. This post explores how anxiety affects both the mind and body, and how therapy can help bring more awareness, regulation, and ease into daily life.",
    ],
  },
  {
    slug: "blog-post-two",
    title: "Blog Post Two",
    subtitle: "When Burnout Becomes a Way of Life",
    date: "Mar 18",
    image: "/burnout.jpg",
    content: [
      "Burnout often develops slowly, especially for people who are used to pushing through stress and responsibility. Over time, this can lead to emotional exhaustion, disconnection, and a loss of motivation. In this post, we look at how chronic stress impacts well-being and why creating more sustainable ways of living and working is essential for recovery.",
    ],
  },
  {
    slug: "blog-post-three",
    title: "Blog Post Three",
    subtitle: "How Past Experiences Shape Present Relationships",
    date: "Mar 25",
    image: "/daisy.jpg",
    content: [
      "Our earlier experiences can quietly influence how safe, connected, or understood we feel in relationships today. This post reflects on how past patterns may show up in communication, trust, or emotional closeness, and how therapy can support greater insight and healthier ways of relating.",
    ],
  },
  {
    slug: "blog-post-four",
    title: "Blog Post Four",
    subtitle: "Why Being High-Functioning Can Still Feel Exhausting",
    date: "Apr 1",
    image: "/Anxiety.jpg",
    content: [
      "Many people appear capable, successful, and composed on the outside while feeling overwhelmed internally. This post explores the experience of being “high-functioning” yet emotionally drained, and why seeking support can be meaningful even when life seems to be going well on the surface.",
    ],
  },
];
