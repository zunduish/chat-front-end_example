import axios from "axios"
export const defaultSettings = [
  {
    last_seen: false,
    readReceipt: false,
    joiningGroups: false,
    privateMessages: false,
    darkMode: false,
    borderedTheme: false,
    allowNotifications: false,
    keepNotifications: false,
  },
];

export const user = {
  id: "1",
  first_name: "Зундуй",
  last_seen: new Date(),
  last_name: "Зундуй",
  email: "zundui@gmail.com",
  avatar:
    '/src/assets/images/zsh.jpg',
  contacts: [
    {
      id: 2,
      email: "bilguun@gmail.com",
      first_name: "Билгүүн",
      last_name: "Нямжаргал",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/bek.jpg',
    },
    {
      id: 3,
      email: "nomin@gmail.com",
      first_name: "Номин-Эрдэнэ",
      last_name: "М.",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/no.jpg',
    },
    {
      id: 4,
      first_name: "Зундуй",
      last_seen: new Date(),
      last_name: "Зундуй",
      email: "zundui@gmail.com",
      avatar:
        '/src/assets/images/zsh.jpg',
    },
    {
      id: 5,
      email: "oyuntuya@gmail.com",
      first_name: "Оюунтуяа",
      last_name: "Баярсайхан",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/oyu.jpg',
    },
    {
      id: 6,
      email: "anujin@gmail.com",
      first_name: "Анужин",
      last_name: "Батболд",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/anu.jpg',
    },
    {
      id: 7,
      email: "batdelger@gmail.com",
      first_name: "Батдэлгэр",
      last_name: "Батсайхан",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/delger.jpg',
    },
    {
      id: 8,
      email: "baagii@gmail.com",
      first_name: "Баагий",
      last_name: "Батсайхан",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/bagii.jpg',
    },
    {
      id: 9,
      email: "altangerel@gmail.com",
      first_name: "Алтангэрэл",
      last_name: "А.",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/agi.jpg',
    },
    {
      id: 10,
      email: "nyambayar@gmail.com",
      first_name: "Нямбаяр",
      last_name: "Баатар",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/nym.jpg',
    },
  ],
};

export const conversations = [
  {
    id: 1,
    type: "couple",
    unread: 2,
    draft_message: "",
    contacts: [
      {
        id: 6,
        email: "anujin@gmail.com",
        first_name: "Анужин",
        last_name: "Батболд",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/anu.jpg',
      },
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content: "Майл хаягаа явуулаарай",
        date: "3:00 pm",
        state: "read",
        sender: {
          id: 6,
          email: "anujin@gmail.com",
          first_name: "Анужин",
          last_name: "Батболд",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/anu.jpg',
        },
      },
      {
        id: 2,
        content: "zundui@gmail.com",
        date: "4:00 pm",
        state: "sent",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
        replyTo: 1,
      },
      {
        id: 3,
        content: "Шалгаад үзээрэй",
        date: "3:00 pm",
        state: "read",
        sender: {
          id: 6,
          email: "anujin@gmail.com",
          first_name: "Анужин",
          last_name: "Батболд",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/anu.jpg',
        },
        replyTo: 2,
      },
      {
        id: 4,
        content: "Шалгах https://amjilt.com",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 6,
          email: "anujin@gmail.com",
          first_name: "Анужин",
          last_name: "Батболд",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/anu.jpg',
        },
        previewData: {
          link: "https://amjilt.com/booking",
          title: "Amjilt",
          image:
            "https://amjilt.com/amjilthome/images/booking1.jpg",
          description:
            "Amjilt Booking бол үйлчилгээний салбарт шинэчлэл авчирч буй динамик цаг захиалгын платформ юм. Манай програм нь дараах салбаруудад зориулагдсан:",
          domain: "amjilt.com/",
        },
      },
      {
        id: 5,
        content: "Шалгаад үзээрэй",
        date: "5:00 pm",
        state: "delivered",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
        attachments: [
          {
            id: 3,
            type: "image",
            name: "mountain.jpg",
            size: "20 MB",
            url: "https://amjilt.com/assets/images/planning.jpg",
          },
          {
            id: 2,
            type: "image",
            name: "pumkins.jpg",
            size: "20 MB",
            url: "https://amjilt.com/assets/images/documents.jpg",
          },
          {
            id: 1,
            type: "image",
            name: "forest.jpg",
            size: "20 MB",
            url: "https://amjilt.com/amjilthome/images/pos1.jpg",
          },
        ],
        replyTo: 4,
      },
      {
        id: 6,
        date: "5:30 pm",
        state: "read",
        attachments: [
          {
            id: 4,
            type: "file",
            name: "lecture-10.pdf",
            size: "54.5 MB",
            url: "https://losalamos.unm.edu/forms/study-methods.pdf",
          },
        ],
        sender: {
          id: 6,
          email: "anujin@gmail.com",
          first_name: "Анужин",
          last_name: "Батболд",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/anu.jpg',
        },
      },
      {
        id: 7,
        date: "6:00 pm",
        state: "read",
        attachments: [
          {
            id: 5,
            type: "video",
            name: "fun-video.mp4",
            size: "11.4 MB",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail:
              "https://amjilt.com/amjilthome/images/pos9.png",
          },
          {
            id: 12,
            type: "video",
            name: "awesome-video.mp4",
            size: "11.4 MB",
            url: "https://assets.mixkit.co/videos/preview/mixkit-small-flowering-plants-in-a-nursery-43709-large.mp4",
            thumbnail:
              "https://amjilt.com/assets/images/attendance.jpg",
          },
        ],
        sender: {
          id: 6,
          email: "anujin@gmail.com",
          first_name: "Анужин",
          last_name: "Батболд",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/anu.jpg',
        },
      },
      {
        id: 8,
        type: "recording",
        state: "waiting",
        content: {
          id: 1,
          size: "10 MB",
          src: "https://assets.mixkit.co/music/614/614.mp3",
          duration: "23 сек",
        },
        date: "6:20 pm",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
    ],
  },

  {
    id: 2,
    type: "couple",
    draft_message: "",
    contacts: [
      {
        id: 5,
        email: "oyuntuya@gmail.com",
        first_name: "Оюунтуяа",
        last_name: "Баярсайхан",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/oyu.jpg',
      },
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content: "Та надад линк илгээж болох уу",
        date: "8:15 am",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 2,
        content: "Тиймээс би энэ гайхалтай видеог онлайнаар олсон",
        date: "1:00 pm",
        state: "read",
        sender: {
          id: 5,
          email: "oyuntuya@gmail.com",
          first_name: "Оюунтуяа",
          last_name: "Баярсайхан",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/oyu.jpg',
        },
      },
      {
        id: 3,
        content: "Энэ нь мансууруулах бодисыг зогсоох тухай юм",
        date: "1:05 pm",
        state: "read",
        sender: {
          id: 5,
          email: "oyuntuya@gmail.com",
          first_name: "Оюунтуяа",
          last_name: "Баярсайхан",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/oyu.jpg',
        },
      },
      {
        id: 4,
        content: "Та надад линк илгээж болох уу",
        date: "1:15 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 6,
        content: "Сайн байна уу, үүнийг шалгаарай",
        date: "1:30 pm",
        state: "read",
        attachments: [
          {
            id: 14,
            type: "image",
            name: "forest.jpg",
            size: "20 MB",
            url: "https://api.amjilt.com/main/uploaded/images/2024/October/Screenshot%202024-10-31%20152741.jpg",
          },
          {
            id: 13,
            type: "video",
            name: "fun-video.mp4",
            size: "11.4 MB",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail:
              "https://api.amjilt.com/main/uploaded/images/2024/October/Screenshot%202024-10-31%20152952.jpg",
          },
          {
            id: 15,
            type: "image",
            name: "forest.jpg",
            size: "20 MB",
            url: "https://api.amjilt.com/main/uploaded/images/2024/October/Screenshot%202024-10-31%20153047.jpg",
          },
        ],
        sender: {
          id: 5,
          email: "oyuntuya@gmail.com",
          first_name: "Оюунтуяа",
          last_name: "Баярсайхан",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/oyu.jpg',
        },
      },
      {
        id: 7,
        content: "Хөөх, үнэхээр гайхалтай",
        date: "1:30 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 8,
        content: "Та тавтай морил",
        date: "1:30 pm",
        state: "read",
        sender: {
          id: 5,
          email: "oyuntuya@gmail.com",
          first_name: "Оюунтуяа",
          last_name: "Баярсайхан",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/oyu.jpg',
        },
      },
    ],
  },

  {
    id: 6,
    type: "group",
    name: "Дизайн баг",
    avatar:
      "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    admins: [1],
    draft_message: "",
    contacts: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 2,
        email: "bilguun@gmail.com",
        first_name: "Билгүүн",
        last_name: "Нямжаргал",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/bek.jpg',
      },
      {
        id: 3,
        email: "nomin@gmail.com",
        first_name: "Номин-Эрдэнэ",
        last_name: "М.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/no.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content: "Сайн уу",
        date: "1:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 2,
        content: "Төлөвлөгөөт ажил дууссан",
        date: "2:00 pm",
        state: "read",
        sender: {
          id: 2,
          email: "bilguun@gmail.com",
          first_name: "Билгүүн",
          last_name: "Нямжаргал",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/bek.jpg',
        },
      },
      {
        id: 3,
        content: "Өө, мэдэхэд таатай байна.",
        date: "5:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 4,
        content: "Өнгөрсөн өдөр чамтай уулзсан нь үнэхээр сайхан байлаа",
        date: "3:00 pm",
        state: "read",
        sender: {
          id: 3,
          email: "nomin@gmail.com",
          first_name: "Номин-Эрдэнэ",
          last_name: "М.",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/no.jpg',
        },
      },
      {
        id: 5,
        content: "Маш их баярлалаа.",
        date: "3:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 6,
        content: "Ирэх долоо хоногт агиантай уулзацгаая.",
        date: "5:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 7,
        content: "За дараа долоо хоногт.",
        date: "5:00 pm",
        state: "read",
        sender: {
          id: 2,
          email: "bilguun@gmail.com",
          first_name: "Билгүүн",
          last_name: "Нямжаргал",
          last_seen: new Date(),
          avatar:
            '/src/assets/images/bek.jpg',
        },
      },
    ],
  },

  {
    id: 7,
    type: "broadcast",
    name: "Шуурхай мэдээ",
    avatar:
      "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    admins: [1],
    draft_message: "",

    contacts: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 2,
        email: "bilguun@gmail.com",
        first_name: "Билгүүн",
        last_name: "Нямжаргал",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/bek.jpg',
      },
      {
        id: 3,
        email: "nomin@gmail.com",
        first_name: "Номин-Эрдэнэ",
        last_name: "М.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/no.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content:
          "Ачааны машин мөргөлдсөний улмаас Флоридагийн хурдны замыг шар айрагны лаазны мөнгөн тэнгис болгожээ",
        date: "1:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
      {
        id: 2,
        content:
          "Apple Watch Ultra болон дараагийн үеийн AirPods Pro баасан гаригт дэлгүүрт худалдаалагдаж байна",
        date: "5:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
    ],
  },
];

export const archive = [
  {
    id: 3,
    type: "couple",
    draft_message: "",
    contacts: [
      {
        id: 4,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content: "Өө, мэдэхэд таатай байна.",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
    ],
  },

  {
    id: 4,
    type: "couple",
    draft_message: "",
    contacts: [
      {
        id: 3,
        email: "nomin@gmail.com",
        first_name: "Номин-Эрдэнэ",
        last_name: "М.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/no.jpg',
      },
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
    ],
    messages: [
      {
        id: 1,
        content: "Өө, мэдэхэд таатай байна.",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 1,
          first_name: "Зундуй",
          last_seen: new Date(),
          last_name: "Зундуй",
          email: "zundui@gmail.com",
          avatar:
            '/src/assets/images/zsh.jpg',
        },
      },
    ],
  },
];

export const notifications = [
  {
    flag: "security",
    title: "Саяхан нэвтэрсэн",
    message: "Энэ төхөөрөмжөөс таны бүртгэлд саяхан нэвтэрсэн байна",
  },
  {
    flag: "added-to-group",
    title: "Шинэ групп",
    message: "Таны найз таныг шинэ бүлэгт нэмсэн",
  },
  {
    flag: "account-update",
    title: "Нууц үг шинэчлэх",
    message: "Таны нууц үг амжилттай сэргээгдсэн",
  },
  {
    flag: "security",
    title: "Саяхан нэвтэрсэн",
    message: "Энэ төхөөрөмжөөс таны бүртгэлд саяхан нэвтэрсэн байна",
  },
  {
    flag: "added-to-group",
    title: "Шинэ групп",
    message: "Таны найз таныг шинэ бүлэгт нэмсэн",
  },
];

export const calls = [
  {
    id: 1,
    type: "voice",
    status: "missed",
    direction: "incoming",
    date: "12-12-2020",
    length: "01:12",
    members: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 2,
        email: "bilguun@gmail.com",
        first_name: "Билгүүн",
        last_name: "Нямжаргал",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/bek.jpg',
      },
    ],
    adminIds: [1],
  },

  {
    id: 2,
    type: "voice",
    status: "received",
    direction: "incoming",
    date: "12-12-2020",
    length: "01:12",
    members: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 2,
        email: "bilguun@gmail.com",
        first_name: "Билгүүн",
        last_name: "Нямжаргал",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/bek.jpg',
      },
      {
        id: 3,
        email: "nomin@gmail.com",
        first_name: "Номин-Эрдэнэ",
        last_name: "М.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/no.jpg',
      },
      {
        id: 9,
        email: "altangerel@gmail.com",
        first_name: "Алтангэрэл",
        last_name: "А.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/agi.jpg',
      },
    ],
    adminIds: [2],
  },

  {
    id: 3,
    type: "voice",
    status: "sent",
    direction: "Дуудлага хийгдэж байна",
    date: "12-12-2020",
    length: "01:12",
    members: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 5,
        email: "oyuntuya@gmail.com",
        first_name: "Оюунтуяа",
        last_name: "Баярсайхан",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/oyu.jpg',
      },
    ],
    adminIds: [1],
  },

  {
    id: 4,
    type: "voice",
    status: "missed",
    direction: "incoming",
    date: "12-12-2020",
    length: "01:12",
    members: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 3,
        email: "nomin@gmail.com",
        first_name: "Номин-Эрдэнэ",
        last_name: "М.",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/no.jpg',
      },
    ],
    adminIds: [1],
  },

  {
    id: 5,
    type: "voice",
    status: "sent",
    direction: "Дуудлага хийгдэж байна",
    date: "12-12-2020",
    length: "01:12",
    members: [
      {
        id: 1,
        first_name: "Зундуй",
        last_seen: new Date(),
        last_name: "Зундуй",
        email: "zundui@gmail.com",
        avatar:
          '/src/assets/images/zsh.jpg',
      },
      {
        id: 8,
        email: "baagii@gmail.com",
        first_name: "Баагий",
        last_name: "Батсайхан",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/bagii.jpg',
      },
      {
        id: 10,
        email: "nyambayar@gmail.com",
        first_name: "Нямбаяр",
        last_name: "Баатар",
        last_seen: new Date(),
        avatar:
          '/src/assets/images/nym.jpg',
      },
    ],
    adminIds: [1],
  },
];

export const activeCall = {
  id: 6,
  type: "voice",
  status: "dialing",
  direction: "Дуудлага хийгдэж байна",
  date: "12-12-2020",
  length: "01:12",
  members: [
    {
      id: 1,
      first_name: "Зундуй",
      last_seen: new Date(),
      last_name: "Зундуй",
      email: "zundui@gmail.com",
      avatar:
        '/src/assets/images/zsh.jpg',
    },
    {
      id: 8,
      email: "baagii@gmail.com",
      first_name: "Баагий",
      last_name: "Батсайхан",
      last_seen: new Date(),
      avatar:
        '/src/assets/images/bagii.jpg',
    },
  ],
  adminIds: [1],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const fetchData = async () => {
//   await delay(2000);
//
//   return await {
//     data: {
//       user: user,
//       conversations: conversations,
//       notifications: notifications,
//       archivedConversations: archive,
//     },
//   };
// };



export const updateAccount = async () => {
  await delay(4000);

  return await {
    data: {
      detail: "Your account has been updated successfully",
    },
  };
};

export const attachments = [
  {
    id: 6,
    type: "image",
    name: "forest.jpg",
    size: "21 MB",
    url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    type: "image",
    name: "pumkins.jpg",
    size: "22 MB",
    url: "https://images.unsplash.com/photo-1664031315855-955dbca83172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8,
    type: "image",
    name: "mountain.jpg",
    size: "23 MB",
    url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    type: "file",
    name: "lecture-10.pdf",
    size: "52.4 MB",
    url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    type: "video",
    name: "fun-video.mp4",
    size: "11.4 MB",
    url: "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default {
  defaultSettings,
  archive,
  conversations,
  notifications,
  calls,
  activeCall,
  user,
} as const;
