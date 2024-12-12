interface blogs {
    id: number;
    title: string;
    topic: string;
    description: string;
    image: string;
    publisher: string;
    date: string;
  }

const Blog: blogs[] = [
    {
      id: 1,
      title: "Lorem Ipsum is simply",
      topic: "Topic 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpWtSM--AOXykTtn~NnCQgeR6osDEx8JEuqBho7W603I3jl5KOU3iL52WeK2tyJJ7IfnTS~WYf1mcmbZiiqKRS~sGDyCGQXF-2uTO~GKz0UjlbXFmyD8xxhYxw~zZodvNV~e7teC~~2we38sUrztuWaVR~C9NsgdlGD5UiltQk97O8M~Qxmbs1MRY7OKMmZdsLrcgjDFm~HLVIPGW5d5dEk34uFL~cbVn8Rkt6BQnh8JHPyjLWbF8vmJg-KTqngZskhMIeRY-GoXRVLmB4cMoPTo224IJHES8bjpFMTtKWjghCFoCsVu1~lj57q59NLi6p9vl944K7qlg4-uV8Hl~w__",
      publisher: "Publisher Name",
      date: "2 Dec 2024",
    },
    {
      id: 2,
      title: "Why Lorem Ipsum?",
      topic: "Topic 2",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/943c/a575/618fef343a032f10a8aa438836f6fb25?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJzrj7ZNGuIXhOlWW-75ZbACNLqv-NkP~EYa1-d8l~ZLOkGof5elKFv4ZqSvR1G5~gs3r-l11h9vS63QXvnlyhHLXFVSJdxG-wncgBEJ3ThHqKoblTtcJc1fjYYlZNIvEEaEJJf3nfyRAVwp1QnxzfWPX3dN-5kXx0VfhFpVitUnHu-QGG14UlkRRlDwEDUvLoAXYgWn85WZbzw8-gWM2riNlAlsy4w3cXiHKSeinzJvvxu6mK09a-NVxGMwWuVdOv5iUv~miTqv3LdwyaopX3f1TZ9HLAckUUaFVefp0zvwLoJZSJEYFti44eVHx1z-p1rBmRaIeu03vr~qFLPoCQ__",
      publisher: "Publisher Name",
      date: "1 Dec 2024",
    },
    {
      id: 3,
      title: "The Evolution of Lorem Ipsum",
      topic: "Topic 3",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/2c81/6ac7/41d004aa35514cb231d5634d0473baae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9tSJRQt2-ddeyqa11MMU0FGVgLDEaJVh05leKIa9OFYA7fdEk2SWBTt2oVLKOAK~s~m6waBQWXNn12OqFrJWMi3z8tXaOPhI7Ybugfy9VChn4SjQk3RrO-A3CqXCSx3A7STJFePw5m0QzKwPyzrIEZT0r7YrRve8MNIQhyYGUFniZ7dOvF4KHcGVnombO1Rc4IG18WbX5OyQkTSCouxqtig7AVB2A0waRxxH4RWpW7fxcYpl40Fo9S3RfOWqfNSZQQaaZAXKuFCY3NJtZRYcIhYSRxUvj6lxo8OaWYlKDQ10dWf8PYmyS8V5NuTvC88iy0UFfqzPTMqbi5JC6k5mQ__",
      publisher: "Publisher Name",
      date: "29 Nov 2024",
    },
    {
      id: 4,
      title: "Lorem Ipsum is simply",
      topic: "Topic 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpWtSM--AOXykTtn~NnCQgeR6osDEx8JEuqBho7W603I3jl5KOU3iL52WeK2tyJJ7IfnTS~WYf1mcmbZiiqKRS~sGDyCGQXF-2uTO~GKz0UjlbXFmyD8xxhYxw~zZodvNV~e7teC~~2we38sUrztuWaVR~C9NsgdlGD5UiltQk97O8M~Qxmbs1MRY7OKMmZdsLrcgjDFm~HLVIPGW5d5dEk34uFL~cbVn8Rkt6BQnh8JHPyjLWbF8vmJg-KTqngZskhMIeRY-GoXRVLmB4cMoPTo224IJHES8bjpFMTtKWjghCFoCsVu1~lj57q59NLi6p9vl944K7qlg4-uV8Hl~w__",
      publisher: "Publisher Name",
      date: "2 Dec 2024",
    },
    {
      id: 5,
      title: "Why Lorem Ipsum?",
      topic: "Topic 2",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/943c/a575/618fef343a032f10a8aa438836f6fb25?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJzrj7ZNGuIXhOlWW-75ZbACNLqv-NkP~EYa1-d8l~ZLOkGof5elKFv4ZqSvR1G5~gs3r-l11h9vS63QXvnlyhHLXFVSJdxG-wncgBEJ3ThHqKoblTtcJc1fjYYlZNIvEEaEJJf3nfyRAVwp1QnxzfWPX3dN-5kXx0VfhFpVitUnHu-QGG14UlkRRlDwEDUvLoAXYgWn85WZbzw8-gWM2riNlAlsy4w3cXiHKSeinzJvvxu6mK09a-NVxGMwWuVdOv5iUv~miTqv3LdwyaopX3f1TZ9HLAckUUaFVefp0zvwLoJZSJEYFti44eVHx1z-p1rBmRaIeu03vr~qFLPoCQ__",
      publisher: "Publisher Name",
      date: "1 Dec 2024",
    },
    {
      id: 6,
      title: "The Evolution of Lorem Ipsum",
      topic: "Topic 3",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/2c81/6ac7/41d004aa35514cb231d5634d0473baae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9tSJRQt2-ddeyqa11MMU0FGVgLDEaJVh05leKIa9OFYA7fdEk2SWBTt2oVLKOAK~s~m6waBQWXNn12OqFrJWMi3z8tXaOPhI7Ybugfy9VChn4SjQk3RrO-A3CqXCSx3A7STJFePw5m0QzKwPyzrIEZT0r7YrRve8MNIQhyYGUFniZ7dOvF4KHcGVnombO1Rc4IG18WbX5OyQkTSCouxqtig7AVB2A0waRxxH4RWpW7fxcYpl40Fo9S3RfOWqfNSZQQaaZAXKuFCY3NJtZRYcIhYSRxUvj6lxo8OaWYlKDQ10dWf8PYmyS8V5NuTvC88iy0UFfqzPTMqbi5JC6k5mQ__",
      publisher: "Publisher Name",
      date: "29 Nov 2024",
    },
    {
      id: 7,
      title: "The way to program",
      topic: "Topic 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/5d5e/8284/5d3abe2fcad0b544fec8284e9ce0ef49?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpWtSM--AOXykTtn~NnCQgeR6osDEx8JEuqBho7W603I3jl5KOU3iL52WeK2tyJJ7IfnTS~WYf1mcmbZiiqKRS~sGDyCGQXF-2uTO~GKz0UjlbXFmyD8xxhYxw~zZodvNV~e7teC~~2we38sUrztuWaVR~C9NsgdlGD5UiltQk97O8M~Qxmbs1MRY7OKMmZdsLrcgjDFm~HLVIPGW5d5dEk34uFL~cbVn8Rkt6BQnh8JHPyjLWbF8vmJg-KTqngZskhMIeRY-GoXRVLmB4cMoPTo224IJHES8bjpFMTtKWjghCFoCsVu1~lj57q59NLi6p9vl944K7qlg4-uV8Hl~w__",
      publisher: "Publisher Name",
      date: "2 Dec 2024",
    },
    {
      id: 8,
      title: "Why Lorem Ipsum?",
      topic: "Topic 2",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/943c/a575/618fef343a032f10a8aa438836f6fb25?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJzrj7ZNGuIXhOlWW-75ZbACNLqv-NkP~EYa1-d8l~ZLOkGof5elKFv4ZqSvR1G5~gs3r-l11h9vS63QXvnlyhHLXFVSJdxG-wncgBEJ3ThHqKoblTtcJc1fjYYlZNIvEEaEJJf3nfyRAVwp1QnxzfWPX3dN-5kXx0VfhFpVitUnHu-QGG14UlkRRlDwEDUvLoAXYgWn85WZbzw8-gWM2riNlAlsy4w3cXiHKSeinzJvvxu6mK09a-NVxGMwWuVdOv5iUv~miTqv3LdwyaopX3f1TZ9HLAckUUaFVefp0zvwLoJZSJEYFti44eVHx1z-p1rBmRaIeu03vr~qFLPoCQ__",
      publisher: "Publisher Name",
      date: "1 Dec 2024",
    },
    {
      id: 9,
      title: "The Evolution of Lorem Ipsum",
      topic: "Topic 3",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/2c81/6ac7/41d004aa35514cb231d5634d0473baae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9tSJRQt2-ddeyqa11MMU0FGVgLDEaJVh05leKIa9OFYA7fdEk2SWBTt2oVLKOAK~s~m6waBQWXNn12OqFrJWMi3z8tXaOPhI7Ybugfy9VChn4SjQk3RrO-A3CqXCSx3A7STJFePw5m0QzKwPyzrIEZT0r7YrRve8MNIQhyYGUFniZ7dOvF4KHcGVnombO1Rc4IG18WbX5OyQkTSCouxqtig7AVB2A0waRxxH4RWpW7fxcYpl40Fo9S3RfOWqfNSZQQaaZAXKuFCY3NJtZRYcIhYSRxUvj6lxo8OaWYlKDQ10dWf8PYmyS8V5NuTvC88iy0UFfqzPTMqbi5JC6k5mQ__",
      publisher: "Publisher Name",
      date: "29 Nov 2024",
    },
    {
      id: 10,
      title: "The Evolution of Lorem Ipsum",
      topic: "Topic 3",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/2c81/6ac7/41d004aa35514cb231d5634d0473baae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9tSJRQt2-ddeyqa11MMU0FGVgLDEaJVh05leKIa9OFYA7fdEk2SWBTt2oVLKOAK~s~m6waBQWXNn12OqFrJWMi3z8tXaOPhI7Ybugfy9VChn4SjQk3RrO-A3CqXCSx3A7STJFePw5m0QzKwPyzrIEZT0r7YrRve8MNIQhyYGUFniZ7dOvF4KHcGVnombO1Rc4IG18WbX5OyQkTSCouxqtig7AVB2A0waRxxH4RWpW7fxcYpl40Fo9S3RfOWqfNSZQQaaZAXKuFCY3NJtZRYcIhYSRxUvj6lxo8OaWYlKDQ10dWf8PYmyS8V5NuTvC88iy0UFfqzPTMqbi5JC6k5mQ__",
      publisher: "Publisher Name",
      date: "29 Nov 2024",
    },
  ];

  export default Blog