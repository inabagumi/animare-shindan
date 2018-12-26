import { Link } from 'gatsby'
import * as React from 'react'
import { default as styled } from 'styled-components'

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 680px;
  padding: 20px 0;
  width: 100%;
`

const Logo = styled(Link)`
  color: #fff;
  display: block;
  text-decoration: none;

  span {
    display: block;
    font-size: 17px;
    font-weight: 700;
    height: 20px;
    letter-spacing: -2px;
  }
`

const Navigation = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 4px;
    padding: 0;
  }
`

const ShareButton = styled.a`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  svg {
    height: 16px;
    width: 16px;
  }

  @media (min-width: 500px) {
    height: 48px;
    width: 48px;

    svg {
      height: 24px;
      width: 24px;
    }
  }
`

export default (() => (
  <Container>
    <Logo to="/">
      <span>あにまーれ</span>
    </Logo>

    <Navigation>
      <ul>
        <li>
          <ShareButton
            href="https://twitter.com/intent/tweet?hashtags=%E3%81%82%E3%81%AB%E3%81%BE%E3%83%BC%E3%82%8C%E3%82%AA%E3%82%BF%E3%82%AF%E3%82%BF%E3%82%A4%E3%83%97%E8%A8%BA%E6%96%AD&amp;text=&amp;url=https%3A%2F%2Fshindan.animare.cafe%2F"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                fill="#00aced"
              />
            </svg>
          </ShareButton>
        </li>
        <li>
          <ShareButton
            href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fshindan.animare.cafe%2F"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#00B900"
                d="M16 6.49198C16 2.91186 12.411 0 8.00381 0C3.59663 0 0 2.91186 0 6.49198C0 9.70113 2.8458 12.3894 6.69017 12.8976C6.95061 12.9535 7.30633 13.0691 7.39526 13.2914C7.47657 13.4947 7.44862 13.811 7.42067 14.0156C7.42067 14.0156 7.32793 14.5796 7.3076 14.7003C7.27203 14.9023 7.14626 15.4906 8 15.131C8.85374 14.7715 12.6079 12.4186 14.2862 10.4863C15.4461 9.21582 16.0013 7.92504 16.0013 6.49198"
              />
              <path
                fill="#fff"
                d="M6.3751 4.7629H5.81356C5.7931 4.76274 5.77281 4.76662 5.75386 4.77433 5.73491 4.78205 5.71767 4.79344 5.70314 4.80785 5.68861 4.82226 5.67708 4.8394 5.66922 4.85829 5.66135 4.87718 5.6573 4.89744 5.6573 4.9179V8.404C5.65763 8.44522 5.67424 8.48464 5.70351 8.51367 5.73278 8.54271 5.77234 8.559 5.81356 8.55899H6.3751C6.41621 8.55899 6.45563 8.54266 6.4847 8.5136 6.51376 8.48453 6.53009 8.44511 6.53009 8.404V4.9179C6.53009 4.87679 6.51376 4.83737 6.4847 4.8083 6.45563 4.77923 6.41621 4.7629 6.3751 4.7629zM10.2373 4.7629H9.67572C9.65532 4.76273 9.63509 4.76663 9.6162 4.77436 9.59732 4.78209 9.58017 4.7935 9.56574 4.80792 9.55132 4.82235 9.53991 4.8395 9.53218 4.85838 9.52445 4.87727 9.52055 4.8975 9.52072 4.9179V6.98745L7.9225 4.8277 7.91107 4.81245 7.9009 4.80229H7.89328 7.88566 7.87804 7.86914 7.86025 7.23138C7.19027 4.80229 7.15085 4.81862 7.12178 4.84768 7.09272 4.87675 7.07639 4.91617 7.07639 4.95728V8.404C7.07639 8.44511 7.09272 8.48453 7.12178 8.5136 7.15085 8.54267 7.19027 8.559 7.23138 8.559H7.79292C7.83414 8.559 7.8737 8.54271 7.90297 8.51368 7.93224 8.48465 7.94885 8.44523 7.94918 8.404V6.33317L9.54867 8.49293C9.55873 8.50881 9.57218 8.52226 9.58806 8.53232H9.59822 9.60584 9.61347 9.62363C9.63669 8.53425 9.64996 8.53425 9.66301 8.53232H10.2246C10.2658 8.53232 10.3053 8.51603 10.3346 8.487 10.3639 8.45797 10.3805 8.41855 10.3808 8.37732V4.9179C10.3808 4.89744 10.3768 4.87718 10.3689 4.85829 10.361 4.8394 10.3495 4.82226 10.335 4.80785 10.3204 4.79344 10.3032 4.78205 10.2843 4.77433 10.2653 4.76662 10.245 4.76274 10.2246 4.7629M5.02207 7.6862H3.49754V4.9179C3.49754 4.87645 3.48108 4.83671 3.45177 4.8074 3.42247 4.7781 3.38272 4.76163 3.34127 4.76163H2.77974C2.73851 4.76197 2.69909 4.77858 2.67006 4.80785 2.64103 4.83712 2.62474 4.87667 2.62474 4.9179V8.40401C2.62431 8.4443 2.63984 8.48312 2.66794 8.51199 2.66794 8.51199 2.66794 8.51199 2.66794 8.51199 2.6965 8.53979 2.73481 8.55529 2.77466 8.55519H5.02207C5.06318 8.55519 5.1026 8.53886 5.13167 8.50979 5.16074 8.48072 5.17707 8.4413 5.17707 8.40019V7.84247C5.17724 7.82201 5.17335 7.80171 5.16564 7.78276 5.15792 7.76381 5.14653 7.74657 5.13212 7.73205 5.11771 7.71752 5.10057 7.70599 5.08168 7.69812 5.06279 7.69025 5.04254 7.6862 5.02207 7.6862M13.3397 5.6357C13.3602 5.6357 13.3805 5.63166 13.3995 5.62381 13.4184 5.61595 13.4357 5.60444 13.4502 5.58993 13.4647 5.57542 13.4762 5.55819 13.4841 5.53924 13.4919 5.52028 13.4959 5.49996 13.4959 5.47944V4.9179C13.4959 4.89744 13.4919 4.87718 13.484 4.85829 13.4762 4.8394 13.4646 4.82226 13.4501 4.80785 13.4356 4.79344 13.4183 4.78205 13.3994 4.77433 13.3804 4.76662 13.3601 4.76274 13.3397 4.7629H11.0935C11.0533 4.76287 11.0146 4.77834 10.9855 4.8061V4.8061C10.9578 4.83466 10.9423 4.87296 10.9424 4.91282V4.91282 8.40401C10.9421 8.44388 10.9576 8.48224 10.9855 8.51072 11.0141 8.53852 11.0524 8.55402 11.0923 8.55392H13.3397C13.3809 8.55392 13.4205 8.53763 13.4497 8.5086 13.479 8.47957 13.4956 8.44015 13.4959 8.39892V7.84247C13.4959 7.82195 13.4919 7.80163 13.4841 7.78267 13.4762 7.76371 13.4647 7.74648 13.4502 7.73197 13.4357 7.71746 13.4184 7.70595 13.3995 7.6981 13.3805 7.69024 13.3602 7.6862 13.3397 7.6862H11.8151V7.09671H13.3397C13.3809 7.09672 13.4205 7.08043 13.4497 7.0514 13.479 7.02236 13.4956 6.98294 13.4959 6.94172V6.38018C13.4956 6.33896 13.479 6.29954 13.4497 6.27051 13.4205 6.24148 13.3809 6.22519 13.3397 6.22519H11.8151V5.6357H13.3397z"
              />
            </svg>
          </ShareButton>
        </li>
      </ul>
    </Navigation>
  </Container>
)) as React.FunctionComponent
