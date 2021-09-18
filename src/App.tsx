import React, { useState } from 'react';
import './App.scss';
import './styles/global.scss'
import { MediaQueryProvider, useDeviceType } from 'context/MediaQuery';
import Header from './component/header/Header';
import img_profile from "./image/profile.png";
import img_hero from './image/hero.png';
import Section from './component/section/Section';
import Work from './component/work/Work';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import Footer from './component/footer/Footer';
import TransitionsModal from 'component/modal';
import img_ebisen_blog from './image/works/ebisen_blog.png';
import SkillImg from './image/skills';
import * as dotenv from 'dotenv';

const Hero = () => (
  <div id="hero">
    <img id="hero-img" src={img_hero}></img>
    <div id="hero-text-container">
      <h1 id="hero-title">ebisenttt</h1>
      <p id="hero-description">Web Engineering Learner</p>
    </div>
  </div>
)

const Works = () => {
  type WorkPropsType = React.ComponentProps<typeof Work>;
  const workList: Array<WorkPropsType> = [
    { title: "ebisen blog", img: img_ebisen_blog, src: "https://ebisenttt.github.io/blog/" }
  ]
  return (
    <Section id="works" title="Works">
      <div className="works-container">
        {
          workList.map(e => (
            <Work title={e.title} img={e.img} src={e.src} />
          ))
        }
      </div>
    </Section>
  )
}

const Profile = () => {
  const { isMobile } = useDeviceType();
  const text: string =
    "プログラミング初学者です。"
    + "数学科の教員として働きながら，転職も視野に入れてWeb開発を中心にプログラミングを勉強しています。"
    + "Progate，ドットインストールでHTML, CSS，Java Scriptを学習し，"
    + "UdemyやQiitaを活用してGAS，jQuery，React.js，"
    + "Ruby on RailsチュートリアルでRuby on Railsを学習しました。"
    + "まだまだ勉強中のことはたくさんありますが，知的好奇心は高く，"
    + "新しいものを取り入れようとする姿勢を崩さないと自負しています。";

  const className = isMobile ? 'profile-for-mobile' : 'profle-for-pc';
  return (
    <Section id="profile" title="Profile">
      <div id="profile-img-container">
        <img id="profile-img" src={img_profile} />
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
      {Object.keys(SkillImg).map(key => (
        <SkillContainer
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
    name: string
  }

  const [inputValue, setInputValue] = useState<{ [key: string]: { [key: string]: string | boolean } }>({
    name: { value: "", error: false },
    email: { value: "", error: false },
    subject: { value: "", error: false },
    content: { value: "", error: false }
  })

  const [successModalOpened, setSuccessModalOpened] = useState<boolean>(false);
  const [failedModalOpened, setFailedModalOpened] = useState<boolean>(false);

  const inputList: inputPropsType[] = [
    { label: "お名前", type: "text", name: "name" },
    { label: "メールアドレス", type: "email", name: "email" },
    { label: "件名", type: "text", name: "subject" }
  ]

  const SendButton = () => (
    <Button
      variant="contained"
      size="medium"
      disableElevation
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
    setInputValue(() => {
      const preError = inputValue[name].error;
      return { ...inputValue, [name]: { value: target.value, error: preError } }
    });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dotenv.config();
    const userId = (process.env.REACT_APP_EMAILJS_USER_ID as string);
    const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID as string);
    const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string);
    const preState = inputValue;
    Object.keys(preState).map(key => {
      if (preState[key].value === "") {
        preState[key].error = true;
      } else {
        preState[key].error = false;
      }
    })
    if (!Object.keys(preState).some(key => preState[key].error === true)) {
      emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)
        .then((result) => {
          openSuccessModal();
          console.log(result, "Success to send contact form.");
        }, (error) => {
          openFailedModal();
          console.log(error, "Failed to send contact form.");
        });
      openSuccessModal();
    }
    return setInputValue({ ...preState });
  }

  const openSuccessModal = () => {
    setSuccessModalOpened(true);
  }

  const openFailedModal = () => {
    setFailedModalOpened(true);
  }

  const closeSuccessModal = () => {
    setSuccessModalOpened(false);
  }

  const closeFailedModal = () => {
    setFailedModalOpened(false);
  }

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

  const ContactModal = () => {
    return (
      <>
        <SuccessModal />
        <FailedModal />
      </>
    )
  }

  return (
    <Section id="contact" title="Contact">
      <div className='form-container'>
        <form onSubmit={handleOnSubmit}>
          {inputList.map(e => {
            const isError = inputValue[e.name].error;
            return (
              <label>
                {e.label}[必須]
                <input type={e.type} name={e.name} onChange={handleOnChange} />
                {isError && <div id={`error-message-${e.name}`} className="error-message">{e.label}の入力は必須です</div>}
              </label>
            )
          })}
          <label>本文[必須]
            <textarea name="content" onChange={handleOnChange}></textarea>
            {inputValue.content.error && <div id='error-message-content' className="error-message">本文の入力は必須です</div>}
          </label>
          <SendButton />
        </form>
        <ContactModal />
      </div>
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
