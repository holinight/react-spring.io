import React from 'react'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import {Link} from '@reach/router'
import raw from 'raw.macro'
import {animated} from 'react-spring'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../../common/components'

const InterpolationCodeMD = raw('./spring/interpolation-code.md')
const PresetsTableMD = raw('../docs/api/presets-table.md')
const SpringConfigTableMD = raw('../docs/api/spring-config-table.md')
const SpringPropsTableMD = raw('./spring/spring-props-table.md')

export default function SpringPage({path}) {
  return (
    <NavPage currentPath={path}>
      <RewindSpringProvider>
        <section>
          <h1>Spring</h1>

          <FencedCode>{`import { Spring } from 'react-spring/renderprops'`}</FencedCode>

          <p>
            The primary task of a <code>Spring</code> is to move data from one state to another. The optional from-prop only plays a role when the component renders first, use the
            to-prop to update the spring with new values.
          </p>

          <p>
            <mark>Springs are accumulative</mark>, they remember <em>all the values</em> you ever pass.
          </p>

          <p>
            <mark>Springs are physics based</mark>, you will never have to break your head about <Link to="/docs/props/gotchas">durations and curves</Link> again.
          </p>

          <p>
            <mark>Do not think of the values you pass as "styles"</mark> per se, although you can use them as such.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props => <div style={props}>hello</div>}
</Spring>`}</FencedCode>
            <RewindSpring>{x => <animated.div style={{opacity: x}}>hello</animated.div>}</RewindSpring>
          </div>

          <p>
            Do with them whatever you like, animate <mark>attributes</mark> for instance,
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Spring
  from={{ x: 100 }}
  to={{ x: 0 }}>
  {props => (
    <svg strokeDashoffset={props.x}>
      <path d="..." />
    </svg>
  )}
</Spring>`}</FencedCode>
            <RewindSpring>
              {x => (
                <animated.svg
                  style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                  viewBox="-10 -10 404 404"
                  strokeWidth="10"
                  fill="white"
                  stroke="rgb(45, 55, 71)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={1200}
                  strokeDashoffset={x.interpolate(x => (1 - x) * 1200)}
                >
                  <path d="m7.015625 243.40625c2.015625 7.554688 4.640625 15.105469 8.039063 23.136719 1 2.335937 2.082031 4.664062 3.34375 7.402343l.847656 1.765626c.824218 1.722656 1.65625 3.464843 2.539062 5.167968.894532 1.746094 1.847656 3.449219 2.824219 5.167969l1.046875 1.875c17.183594 29.839844 42.222656 54.582031 72.65625 71.6875l.800781.429687c1.710938.929688 3.429688 1.855469 5.214844 2.785157l6.359375 3.105469c1.199219.597656 2.425781 1.183593 2.921875 1.359374 2.015625.917969 4.132813 1.832032 6.085937 2.597657 4.898438 1.976562 9.945313 3.800781 15 5.433593l.976563.296876c2.335937.703124 4.632813 1.382812 6.976563 1.949218 1.296874.363282 2.65625.691406 4.175781 1.042969 2.265625.589844 4.632812 1.167969 6.175781 1.414063 2.535156.5625 5.070312 1.03125 7.089844 1.328124 2 .359376 4.09375.648438 5.628906.832032.800781.136718 1.59375.25 2.441406.320312 1.832032.289063 3.601563.472656 5.414063.648438 2.816406.253906 5.625.433594 8.503906.601562 3.25.15625 6.585937.246094 9.921875.246094s6.671875-.089844 9.984375-.273438c2.816406-.167968 5.625-.335937 8.496094-.597656 1.757812-.167968 3.511719-.34375 5.328125-.640625.792968-.054687 1.449218-.152343 1.910156-.230469 2.097656-.273437 4.183594-.554687 5.664062-.832031 2.539063-.378906 5.074219-.851562 6.890626-1.273437 2.261718-.390625 4.628906-.96875 7.160156-1.617188 1.292968-.304687 2.628906-.625 3.917968-.984375 2.351563-.566406 4.679688-1.261719 7.710938-2.175781 5.21875-1.589844 10.425781-3.472656 15.097656-5.445312 2.105469-.824219 4.214844-1.738282 5.511719-2.355469 1.214844-.484375 2.441406-1.070313 3.0625-1.398438l7.167969-3.496093c1.707031-.886719 3.355468-1.785157 4.992187-2.671876l1.035157-.558593c30.191406-16.976563 55.230468-41.722657 72.535156-71.769531l.925781-1.664063c.96875-1.71875 1.921875-3.414063 2.824219-5.167969.882812-1.695312 1.722656-3.441406 2.539062-5.167968l1.039063-2.167969c1.078125-2.335938 2.160156-4.664063 3.183593-7.0625 3.367188-7.96875 5.992188-15.511719 8.015626-23.121094.671874-2.535156 1.351562-5.167969 1.9375-7.664063 3.367187-14.152343 5.070312-28.847656 5.070312-43.664062 0-105.871094-86.136719-192-192-192s-192 86.128906-192 192c0 14.816406 1.703125 29.511719 5.0625 43.65625.59375 2.535156 1.273438 5.160156 1.953125 7.75zm184.984375-211.40625c88.222656 0 160 71.777344 160 160 0 12.328125-1.414062 24.542969-4.214844 36.34375-.527344 2.257812-1.136718 4.59375-1.722656 6.808594-1.621094 6.105468-3.773438 12.261718-6.519531 18.785156-.878907 2.046875-1.832031 4.09375-2.734375 6.046875l-.914063 1.902344c-.6875 1.425781-1.375 2.875-2.101562 4.28125-.738281 1.417969-1.503907 2.800781-2.296875 4.191406l-.878906 1.578125c-14.3125 24.855469-35.183594 45.476562-60.144532 59.503906l-.808594.4375c-1.574218.847656-3.160156 1.707032-4.800781 2.5625l-5.863281 2.847656c-.390625.191407-.777344.40625-1.871094.871094-1.503906.679688-3.074218 1.367188-5.015625 2.136719-4.042969 1.703125-8.203125 3.207031-13.035156 4.679687-1.820313.542969-3.589844 1.09375-5.429687 1.519532l-.90625.238281c-.839844.25-1.726563.449219-2.582032.648437l-1.097656.257813c-1.40625.367187-2.878906.75-5.007812 1.136719-1.789063.398437-3.566407.726562-5.878907 1.078125-1.480469.273437-3.03125.464843-4.566406.664062l-2.394531.296875c-1.292969.238282-2.527344.335938-3.710938.449219-2.472656.222656-4.9375.375-7.34375.511719-5.34375.292968-11.03125.292968-16.25 0-2.46875-.144532-4.933594-.296875-7.351562-.511719-1.230469-.121094-2.46875-.21875-3.765625-.457031l-2.136719-.257813-.257812-.03125c-1.535157-.199219-3.09375-.390625-5.09375-.75-1.792969-.265625-3.570313-.601562-6.082032-1.136719-1.40625-.25-2.878906-.625-4.285156-1l-1.097656-.257812c-.855469-.199219-1.742188-.398438-2.582032-.648438l-.90625-.238281c-1.832031-.425781-3.609374-.976562-5.839843-1.648437-4.351563-1.398438-8.632813-2.953125-12.992188-4.703125-1.566406-.617188-3.144531-1.304688-5.351562-2.289063-.390625-.160156-.777344-.367187-1.742188-.839844l-5.289062-2.574218c-1.640625-.847656-3.214844-1.707032-4.800781-2.5625l-.566407-.3125c-25.183593-14.160156-46.066406-34.78125-60.257812-59.421875l-1-1.792969c-.792969-1.390625-1.558594-2.777344-2.296875-4.191406-.726563-1.410156-1.414063-2.847656-2.101563-4.28125l-.867187-1.808594c-.941406-2.046875-1.894532-4.09375-2.75-6.078125-2.785156-6.585937-4.929688-12.746094-6.542969-18.800781-.59375-2.261719-1.191406-4.597656-1.738281-6.902344-2.800782-11.738281-4.214844-23.953125-4.214844-36.28125 0-88.222656 71.777344-160 160-160zm0 0" />
                  <path d="m192 320c61.761719 0 112-50.238281 112-112v-16h-224v16c0 61.761719 50.238281 112 112 112zm78.390625-96c-7.429687 36.472656-39.757813 64-78.390625 64s-70.960938-27.527344-78.390625-64zm0 0" />
                  <path d="m120 168h32v-24h24v-32h-24v-24h-32v24h-24v32h24zm0 0" />
                  <path d="m232 168h32v-24h24v-32h-24v-24h-32v24h-24v32h24zm0 0" />
                </animated.svg>
              )}
            </RewindSpring>
          </div>

          <p>
            or <mark>innerText</mark>,
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Spring
  from={{ number: 0 }}
  to={{ number: 1 }}>
  {props => <div>{props.number}</div>}
</Spring>`}</FencedCode>
            <RewindSpring>{x => <animated.div style={{fontFamily: 'monospace'}}>{x.interpolate(n => n.toFixed(2))}</animated.div>}</RewindSpring>
          </div>

          <p>
            or generic <mark>React-component props</mark>.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Spring
  from={{ value: 0 }}
  to={{ value: 100 }}>
  {props => <Donut value={props.value} />}
</Spring>`}</FencedCode>
            <RewindSpring>
              {x => (
                <animated.svg
                  style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                  viewBox="0 0 51 51"
                  strokeWidth="2.5"
                  fill="white"
                  stroke="rgb(45, 55, 71)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={156}
                  strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
                >
                  <circle transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)" cx="25.5" cy="25.5" r="24.5" />
                </animated.svg>
              )}
            </RewindSpring>
          </div>
        </section>
      </RewindSpringProvider>

      <section>
        <h2>Interpolation</h2>

        <p>
          <mark>Springs interpolate pretty much everything</mark>, they don't just handle numbers.
        </p>

        <ul>
          <li>colors (names, rgb, rgba, hsl, hsla, gradients)</li>
          <li>absolute lengths (cm, mm, in, px, pt, pc)</li>
          <li>relative lengths (em, ex, ch, rem, vw, vh, vmin, vmax, %)</li>
          <li>angles (deg, rad, grad, turn)</li>
          <li>flex and grid units (fr, etc)</li>
          <li>all HTML attributes</li>
          <li>
            SVG paths (as long as the number of points matches, otherwise use{' '}
            <a href="https://codesandbox.io/embed/lwpkp46om" target="_blank">
              custom interpolation
            </a>
          </li>
          <li>arrays</li>
          <li>string patterns (transform, border, boxShadow, etc)</li>
          <li>auto is valid</li>
          <li>non-animatable string values (visibility, pointerEvents, etc)</li>
          <li>scrollTop/scrollLeft ([native only](/perf), since these aren't actual dom properties)</li>
        </ul>

        <ParseMD contents={InterpolationCodeMD} />

        <p>
          Of course the only properties that the browser can animate relatively cheaply are{' '}
          <a href="https://www.html5rocks.com/en/tutorials/speed/high-performance-animations" target="_blank">
            composite properties
          </a>
          ( (opacity, transform), so you might want to watch out for that.
        </p>
      </section>

      <section>
        <h2>Config</h2>

        <p>
          <mark>Spring are configurable</mark>, delays, tension, friction, resets, everything can be tuned. There are also a couple of generic presets that will cover some common
          ground.
        </p>

        <FencedCode language="jsx">{`import { Spring, config } from 'react-spring'

<Spring config={config.default} />`}</FencedCode>

        <ParseMD content={PresetsTableMD} />

        <p>You can of course set configs for yourself.</p>

        <FencedCode language="jsx">{`<Spring config={{ tension: 0, friction: 2, precision: 0.1 }} />`}</FencedCode>

        <ParseMD content={SpringConfigTableMD} />

        <p>It is also possible to set configs key by key.</p>

        <FencedCode language="jsx">{`<Spring
  to={{ width: 10, color: 'red' }}
  config={key => key === 'width' ? config.slow : config.wobbly} />`}</FencedCode>
      </section>

      <section>
        <h2>Props</h2>
        <ParseMD contents={SpringPropsTableMD} />
      </section>

      <section>
        <h2>Demos</h2>

        <p>
          <mark>TODO: demos here</mark>
        </p>
      </section>
    </NavPage>
  )
}
