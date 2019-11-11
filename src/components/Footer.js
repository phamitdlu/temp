import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramFeed from './InstagramFeed'



import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Theo dõi chúng tôi trên Instagram{' '}
      <a href="https://www.instagram.com/giaoxuhuongson/">@giaoxuhuongson</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">      
      <a href="/terms-of-use/">Điều khoản sử dụng</a> |{' '}
      <a href="/privacy-policy/">Chính sách bảo mật</a> |{' '}
        <span>
           © Copyright {new Date().getFullYear()} All rights reserved. Created by{' '}
          <a href="https://www.lbnb.vn">LB Technology</a>.
        </span>
      </div>
    </footer>
  </div>
)