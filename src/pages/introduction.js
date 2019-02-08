import React from 'react'
import styled from 'styled-components'
import {Tweet} from 'react-twitter-widgets'

import NavPage from '../common/nav-page'
import {Grid, Image} from '../common/components'

export default function IntroductionPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section id="intro">
        <h1>✌️</h1>
        <p className="large">
          <strong>react-spring</strong> is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to
          confidently cast your ideas into moving interfaces.
        </p>
        <Demos />
        <p>
          This library represents a modern approach to animation. It is very much inspired by Christopher Chedeau's{' '}
          <a href="https://github.com/animatedjs/animated" target="_blank">
            animated
          </a>{' '}
          and Cheng Lou's&nbsp;
          <a href="https://github.com/chenglou/react-motion" target="_blank">
            react-motion
          </a>
          . It inherits animated's powerful interpolations and performance, as well as react-motion's ease of use. But while animated is mostly imperative and react-motion mostly
          declarative, react-spring bridges both. Hooks allow us to express intent linearly, you will be surprised how easy static data is cast into motion with small, explicit
          utility functions that don't necessarily affect how you form your views.
        </p>
      </section>

      <section>
        <h2>Why springs and not duration?</h2>
        <p>
          The principle you will be working with is called a <code>spring</code>, it does not have a defined curve or a set duration. In that it differs greatly from the animation
          you are probably used to. We think of animation in terms of time and curves, but that in itself causes most of the struggle we face when trying to make elements on the
          screen move naturally, because nothing in the real world moves like that.
        </p>

        <img style={{maxWidth: '200px'}} src="https://i.imgur.com/7CCH51r.gif" />

        <p>
          We are so used to time-based animation that we believe that struggle is normal, dealing with arbitrary curves, easings, time waterfalls, not to mention getting this all
          in sync. As Andy Matuschak (ex Apple UI-Kit developer){' '}
          <a href="https://twitter.com/andy_matuschak/status/566736015188963328" target="_blank">
            expressed it once
          </a>
          : <em>Animation APIs parameterized by duration and curve are fundamentally opposed to continuous, fluid interactivity.</em>
        </p>

        <p>Springs change that, animation becomes easy and approachable, everything you do looks and feels natural by default. For a detailed explanation watch the video below:</p>

        <YouTubeEmbed src="https://www.youtube.com/embed/1tavDv5hXpo?controls=0&amp;start=370" />
      </section>

      <section>
        <h2>People say</h2>

        <TweetGrid />
      </section>

      <section>
        <h2>Used by</h2>
        <Grid gap="0px">
          <Image title="Aragon" size="130px" href="https://aragon.org/" url="https://aragon.org/static/4b922782-home2.svg" />
          <Image title="Next" size="380px" href="https://nextjs.org" url="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/FloGbmnXSe3Gd49LAWXQ" />
          <Image
            title="Codesandbox"
            href="https://codesandbox.io/"
            url="https://camo.githubusercontent.com/a67bdde6bc5d15103e2516099107980790c0f11f/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f62616e6e65722e706e67"
          />
          <Image
            title="Devhub"
            size="120px"
            href="https://devhubapp.com"
            url="https://user-images.githubusercontent.com/619186/49823485-eed18480-fd66-11e8-88c0-700d840ad4f1.png"
          />
          <Image title="Quill" size="120px" href="https://quill.chat" url="https://quill.chat/079e00e7e0cbbeaa3aae571d657ca75b.png" />
          <Image title="Blockstack" size="120px" href="https://blockstack.org" url="https://avatars3.githubusercontent.com/u/8165984?s=200&v=4" />
          <Image
            title="The Azoor Society"
            size="120px"
            href="https://www.theazoorsociety.org"
            url="https://www.theazoorsociety.org/static/favicon-bd4dc352f10904c557f37e9f506327a0.png"
          />
        </Grid>
        <p>
          And{' '}
          <a href="https://github.com/drcmda/react-spring/network/dependents" target="_blank">
            many others
          </a>
        </p>
      </section>

      <section>
        <h2>Thank you</h2>
        <p>This project exists thanks to all the people who support and contribute 🙏.</p>

        <p>
          If you like this project, please consider helping out. All contributions are welcome as well as donations to{' '}
          <a href="https://opencollective.com/react-spring" target="_blank">
            Opencollective
          </a>
          , or in crypto:
        </p>
        <p>
          <code style={{display: 'inline-block'}}>
            (<strong>BTC</strong>) 36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH
          </code>
          <code style={{display: 'inline-block', marginTop: '10px'}}>
            (<strong>ETH</strong>) 0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682
          </code>
        </p>
        <p>You can also support this project by becoming a sponsor. Your logo will show up here with a link to your website.</p>

        <h3>Gold sponsors</h3>

        <a href="https://aragon.org/">
          <img width="300" src="https://wiki.aragon.org/design/logo/svg/imagetype.svg" />
        </a>

        <h3>Sponsors</h3>

        <a href="https://opencollective.com/react-spring/sponsor/0/website" target="_blank">
          <img src="https://opencollective.com/react-spring/sponsor/0/avatar.svg" />
        </a>
        <a href="https://opencollective.com/react-spring/sponsor/1/website" target="_blank">
          <img src="https://opencollective.com/react-spring/sponsor/1/avatar.svg" />
        </a>

        <h3>Backers</h3>
        <a href="https://opencollective.com/react-spring#backers" target="_blank">
          <img src="https://opencollective.com/react-spring/backers.svg?width=600" />
        </a>

        <h3>Contributors</h3>
        <a href="https://github.com/drcmda/react-spring/graphs/contributors">
          <img src="https://opencollective.com/react-spring/contributors.svg?width=600" />
        </a>
      </section>
    </NavPage>
  )
}

function Demos() {
  return (
    <DemosContainer>
      <img src="https://i.imgur.com/tg1mN1F.gif" style={{width: '50%'}} />
      <img src="https://i.imgur.com/OxGLHeT.gif" style={{width: '30%'}} />
      <img src="https://i.imgur.com/ifdCBvG.gif" style={{width: '10%'}} />
    </DemosContainer>
  )
}

const DemosContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 2em 0;
`

function TweetGrid() {
  const w = 400
  return (
    <Grid>
      <Tweet tweetId="1006931395003015170" options={{width: w}} />
      <Tweet tweetId="1033962041298509824" options={{conversation: 'none', cards: 'hidden', width: w}} />
      <Tweet tweetId="1007560091430801409" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1033964001246543872" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1030826919124590597" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1005463922772664320" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1032284123161931778" options={{conversation: 'none', width: w, cards: 'hidden'}} />
      <Tweet tweetId="983054609353707520" options={{conversation: 'none', width: w}} />
      <Tweet tweetId="1087456685080358918" options={{conversation: 'none', width: w}} />
    </Grid>
  )
}

const ResponsiveVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  width: 100%;
  overflow: hidden;

  border-radius: 20px;
  border: 1px solid #e1e8ed;
  margin: 2em 0;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

function YouTubeEmbed({src}) {
  return (
    <ResponsiveVideoContainer>
      <iframe width="853" height="480" src={src} frameBorder="0" allowFullScreen />
    </ResponsiveVideoContainer>
  )
}
