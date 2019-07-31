import React from 'react';
import codesnippet from './codesnippet.text';

export default () => (
  <div className='cards-box'>
    <div>
      <h3>install</h3>

      <ul className='flex-1'>
        <li>
          <p>
            Install via terminal:
            <br />
            <code>yarn add @magnetis/astro</code>
          </p>
        </li>

        <li>
          <p>
            Get our font links in the <a href='https://astro.magnetis.com.br/#/docs-typography'>
              Typography page
            </a> and load them in your project.
          </p>
        </li>
      </ul>

      <a className='a-btn a-btn--earth a-btn--medium' href='https://github.com/magnetis/astro/blob/master/README.md#adding-astro-to-your-project'>
        read install docs
      </a>
    </div>
    <div>
      <h3>usage</h3>

      <ul className='flex-1'>
        <li>
          <p>Astro components are atomic and can be used in isolation.</p>
        </li>
        <li className='code-snippet'>
          <pre>
            {codesnippet}
          </pre>
        </li>
      </ul>

      <a className='a-btn a-btn--earth a-btn--medium' href='https://github.com/magnetis/astro/blob/master/README.md#using-astro'>
        view usage docs
      </a>
    </div>
    <div>
      <h3>contribute</h3>
      <ul className='flex-1'>
        <li>
          <p>
            Fork Astro and <code>yarn install</code>
          </p>
        </li>

        <iframe
          src='https://ghbtns.com/github-btn.html?user=magnetis&repo=astro&type=fork&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px'
        />

        <li>
          <p>
            Run <code>yarn docz:dev</code> and visit <a href='http://localhost:3000/'>localhost:3000</a>
          </p>
        </li>
      </ul>

      <a className='a-btn a-btn--earth a-btn--medium' href='https://github.com/magnetis/astro/blob/master/CONTRIBUTING.md'>
        see contributing guide
      </a>
    </div>
  </div>
);
