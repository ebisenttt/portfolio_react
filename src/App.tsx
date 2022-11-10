import React, { useState } from 'react';
import './App.scss';
import './styles/global.scss'
import { MediaQueryProvider } from 'context/MediaQuery';
import Header from './component/header';
import img_profile from "./image/profile.png";
import img_hero from './image/hero.png';
import Section from './component/section/Section';
import Work from './component/work/Work';
import { Button, TextField} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import Footer from './component/footer/Footer';
import TransitionsModal from 'component/modal';
import img_ebisen_blog from './image/works/ebisen_blog.png';
import img_p5js from "./image/works/p5js.png";
import img_kamoku_sentaku from "./image/works/kamoku-sentaku.png";
import SkillImg from './image/skills';

const Hero = () => (
  <div id="hero">
    <img id="hero-img" src={img_hero} alt=''></img>
    <div id="hero-text-container">
      <h1 id="hero-title">ebisenttt</h1>
      <p id="hero-description">Web Engineering Learner</p>
    </div>
  </div>
)

const Works = () => {
  type WorkPropsType = React.ComponentProps<typeof Work>;
  const workList: Array<WorkPropsType> = [
    { 
      title: "ebisen blog",
      img: img_ebisen_blog,
      src: "https://ebisenttt.github.io/blog/",
      description: "プログラミング学習記録ブログです"
    },
    {
      title: "circular_permutaiton",
      img: img_p5js,
      src: "https://editor.p5js.org/ebisenttt/collections/g4mGulDBY",
      description: "円順列を生成するツールです"
    },
    {
      title: "科目選択フォーム",
      img: img_kamoku_sentaku,
      src: "https://script.google.com/macros/s/AKfycbxwfUBZtHgztv444U98vuJGGsBD9ebZ9rUj7yMjML49nkkMWCcU-FsT9YOWvybWspXT/exec",
      description: "科目選択調査用に作成したフォームです"
    }
  ]
  return (
    <Section id="works" title="Works">
      <div className="works-container">
        {
          workList.map((e, index) => (
            <Work
              key={index}
              title={e.title}
              img={e.img}
              src={e.src}
              description={e.description}
            />
          ))
        }
      </div>
    </Section>
  )
}

const Profile = () => {
  const text: string =
    "プログラミング初学者です。"
    + "数学科の教員として働きながら，転職も視野に入れてWeb開発を中心にプログラミングを勉強しています。"
    + "Progate，ドットインストールでHTML, CSS，Java Scriptを学習し，"
    + "UdemyやQiitaを活用してGAS，jQuery，React.js，"
    + "Ruby on RailsチュートリアルでRuby on Railsを学習しました。"
    + "まだまだ勉強中のことはたくさんありますが，知的好奇心は高く，"
    + "新しいものを取り入れようとする姿勢を崩さないと自負しています。";

  return (
    <Section id="profile" title="Profile">
      <div id="profile-img-container">
        <img id="profile-img" src={img_profile} alt='profile icon' />
      </div>
      <div id="profile-text-container">
        <p id="profile-text">{text}</p>
      </div>
    </Section>
  )
}

const Skills = () => {
  type Props = {
    img: string,
    name: string
  }
  const SkillContainer = (props: Props) => (
    <div className='skill-container'>
      <img src={props.img} alt='' />
      <p>{props.name}</p>
    </div>
  )

  return (
    <Section id='skills' title='Skills'>
      {Object.keys(SkillImg).map((key, index) => (
        <SkillContainer
          key={index}
          img={SkillImg[key].require}
          name={SkillImg[key].name}
        />
      ))}
    </Section>
  )
}

const Contact = () => {
  type inputPropsType = {
    label: string,
    type: string,
    name: string,
    rows: number
  }
  const inputList: inputPropsType[] = [
    { label: "お名前", type: "text", name: "name", rows: 1 },
    { label: "メールアドレス", type: "email", name: "email", rows: 1 },
    { label: "件名", type: "text", name: "subject", rows: 1 },
    { label: '本文', type: 'text', name: 'content', rows: 5 }
  ]

  const [inputValue, setInputValue] = useState<{ [key: string]: { value: string } }>({
    name: { value: "" },
    email: { value: "" },
    subject: { value: "" },
    content: { value: "" }
  })
  const [successModalOpened, setSuccessModalOpened] = useState<boolean>(false);
  const [failedModalOpened, setFailedModalOpened] = useState<boolean>(false);

  const SendButton = () => (
    <Button
      variant="contained"
      size="medium"
      type="submit"
    >
      <SendIcon fontSize="small" />
      送信
    </Button>
  )

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    setInputValue({ ...inputValue, [name]: { value: target.value } });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = (process.env.REACT_APP_EMAILJS_USER_ID as string);
    const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID as string);
    const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string);
    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)
      .then((result) => {
        openSuccessModal();
        console.log(result, "Success to send contact form.");
      }, (error) => {
        openFailedModal();
        console.log(error, "Failed to send contact form.");
      });
  }

  const openSuccessModal = () => setSuccessModalOpened(true);

  const openFailedModal = () => setFailedModalOpened(true);

  const closeSuccessModal = () => setSuccessModalOpened(false);

  const closeFailedModal = () => setFailedModalOpened(false);

  const successTitle: string = "送信完了";
  const failedTitle: string = "送信失敗";
  const successDescripation: string = "お問合せが正常に送信されました。";
  const failedDescription: string = "申し訳ありません。エラーが発生しました。";

  const SuccessModal = () => (
    <TransitionsModal
      open={successModalOpened}
      openHandler={openSuccessModal}
      closeHandler={closeSuccessModal}
      title={successTitle}
      description={successDescripation}
    />
  );
  const FailedModal = () => (
    <TransitionsModal
      open={failedModalOpened}
      openHandler={openFailedModal}
      closeHandler={closeFailedModal}
      title={failedTitle}
      description={failedDescription}
    />
  );

  return (
    <Section id='contact' title='Contact'>
      <form onSubmit={handleOnSubmit}>
        {inputList.map((e, index) => {
          return (
            <TextField
              key={index}
              label={e.label}
              name={e.name}
              type={e.type}
              variant='outlined'
              margin='normal'
              minRows={e.rows}
              required
              fullWidth
              multiline
              onChange={handleOnChange}
            />
          )
        })}
        <SendButton />
      </form>
      <SuccessModal />
      <FailedModal />
    </Section>
  )
}

const App = () => {

  return (
    <MediaQueryProvider>
      <Header />
      <Hero />
      <Works />
      <Profile />
      <Skills />
      <Contact />
      <Footer />
    </MediaQueryProvider>
  )
}

export default App;
