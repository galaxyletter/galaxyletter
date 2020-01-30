import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

// This should be the black color, but the difference not noticable, so I avoided shadowing a component.
// fill="#231f20"

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <svg
        className="Logo__Desktop"
        height="42"
        width="186"
        version="1.1"
        viewBox="0 0 500 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linearGradient196"
            x2="1"
            gradientTransform="matrix(0,628.28,628.28,0,2679.4,6684.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8cd7bd" offset="0" />
            <stop stopColor="#8cd7bd" offset=".005618" />
            <stop stopColor="#37bba6" offset=".5" />
            <stop stopColor="#00a287" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient206"
            x2="1"
            gradientTransform="matrix(0,628.28,628.28,0,3285.1,6684.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7a6bbc" offset="0" />
            <stop stopColor="#6155ae" offset=".30303" />
            <stop stopColor="#332b75" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient220"
            x2="1"
            gradientTransform="matrix(0,489.39,489.39,0,2746.4,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55b5cc" offset="0" />
            <stop stopColor="#55b5cc" offset=".011236" />
            <stop stopColor="#0799be" offset=".5" />
            <stop stopColor="#137c88" offset=".99438" />
            <stop stopColor="#137c88" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient230"
            x2="1"
            gradientTransform="matrix(210.01,0,0,-210.01,2980.3,7154.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8e44a2" offset="0" />
            <stop stopColor="#882a98" offset=".52116" />
            <stop stopColor="#6e2090" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient238"
            x2="1"
            gradientTransform="matrix(0,489.39,489.39,0,3220.2,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1574c4" offset="0" />
            <stop stopColor="#413d75" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient252"
            x2="1"
            gradientTransform="matrix(229.06,0,0,-229.06,2751.2,7154.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#137c88" offset="0" />
            <stop stopColor="#137c88" offset=".0056181" />
            <stop stopColor="#0799be" offset=".5" />
            <stop stopColor="#55b5cc" offset=".98876" />
            <stop stopColor="#55b5cc" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient260"
            x2="1"
            gradientTransform="matrix(0,604.34,604.34,0,2978.1,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#413d75" offset="0" />
            <stop stopColor="#2e3191" offset="1" />
          </linearGradient>
        </defs>
        <g
          transform="matrix(.13333 0 0 -.13333 -335.02 975.09)"
          fillRule="evenodd"
        >
          <path
            d="m2846.2 6995.3-94.95 317.93-238.61-628.28"
            fill="url(#linearGradient196)"
          />
          <path
            d="m3460.2 6684.9-269.89 628.28-80.3-317.93z"
            fill="url(#linearGradient206)"
          />
          <path
            d="m2846.2 6995.3c-167.66-153.03-333.56-310.35-333.56-310.35l467.66-179.04-134.1 489.39"
            fill="url(#linearGradient220)"
          />
          <path
            d="m2980.3 7110.2 129.71-114.95 80.3 317.93z"
            fill="url(#linearGradient230)"
          />
          <path
            d="m3110 6995.3 350.19-310.35-479.9-179.04z"
            fill="url(#linearGradient238)"
          />
          <path
            d="m2751.2 7313.2 229.05-202.98c-42.62-39.3-88.44-73.25-134.1-114.95l-94.95 317.93"
            fill="url(#linearGradient252)"
          />
          <path
            d="m2980.3 7110.2 129.71-114.95-129.71-489.39-134.1 489.39c45.66 41.7 91.48 75.65 134.1 114.95"
            fill="url(#linearGradient260)"
          />
        </g>
        <g fill={fill} strokeWidth="2.5695" aria-label="Mario Bašić">
          <path
            d="m159.99 72.912v-38.222h4.4769l13.123 19.419 13.179-19.419h4.4769v38.222h-4.1411v-31.45l-13.515 19.475-13.459-19.475v31.45z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m201.54 72.912 15.249-38.222h4.1132l15.194 38.222h-4.4209l-4.5888-11.92h-16.481l-4.5888 11.92zm10.605-15.865h13.403l-6.6874-17.488z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m242.14 72.912v-38.222h14.046q6.2397 0 9.5974 2.854 3.3577 2.826 3.3577 8.2543 0 2.4623-0.78346 4.4769-0.78346 2.0146-1.7908 3.1338-0.97933 1.1192-2.3504 1.9586-1.371 0.81144-2.2384 1.0912-0.8674 0.25183-1.6229 0.41971l10.493 16.033h-4.8686l-9.9611-15.417h-9.7373v15.417zm4.1411-19.307h9.6813q2.854 0 4.7567-0.64356 1.9307-0.67154 2.7981-1.8467 0.8674-1.1752 1.1752-2.3224 0.30779-1.1472 0.30779-2.6861 0-1.5669-0.30779-2.7141-0.30779-1.1472-1.1752-2.3224-0.8674-1.1752-2.7981-1.8187-1.9027-0.67154-4.7567-0.67154h-9.6813z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m278.52 72.912v-38.222h4.1411v38.222z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m308.63 73.36q-17.712 0-17.712-19.586 0-19.586 17.712-19.586 17.768 0 17.768 19.586 0 19.586-17.768 19.586zm-10.325-31.506q-3.2737 3.7774-3.2737 11.92 0 8.1424 3.2737 11.92t10.325 3.7774q7.1071 0 10.353-3.7774 3.2737-3.7774 3.2737-11.92 0-8.1424-3.2737-11.92-3.2458-3.7774-10.353-3.7774-7.0511 0-10.325 3.7774z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m335.15 72.912v-38.222h13.766q2.6302 0 4.8686 0.55961 2.2385 0.53163 4.1691 1.7068 1.9586 1.1752 3.0779 3.3577 1.1192 2.1825 1.1192 5.1484 0 5.0365-4.5329 7.3869 6.6594 2.4063 6.6594 8.8419 0 1.5389-0.27981 2.882-0.25183 1.3431-1.1752 2.966-0.89538 1.5949-2.3784 2.7141-1.455 1.1192-4.0572 1.9027-2.6022 0.75548-6.0998 0.75548zm6.8832-6.0158h7.9185q7.4429 0 7.4429-5.5682 0-4.9806-7.6947-4.9806h-7.6667zm0-16.621h7.275q5.9599 0 5.9599-4.5888 0-5.0365-6.4635-5.0365h-6.7713z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m368.98 72.912 15.194-38.222h7.5548l15.194 38.222h-7.3869l-3.4976-9.1777h-16.173l-3.4976 9.1777zm13.235-15.417h11.416l-5.6801-14.998z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m411.9 45.351q0-5.5122 3.8893-8.3103 3.8893-2.7981 9.7373-2.7981 5.1484 0 10.269 2.6302v6.6874q-4.421-2.91-9.4575-2.91-3.1618 0-5.3723 1.0912-2.1825 1.0912-2.1825 3.4416 0 1.9027 1.9866 2.9939 2.0146 1.0633 4.8406 1.8187 2.854 0.7275 5.7081 1.8467 2.882 1.1192 4.8686 3.8893 2.0146 2.7421 2.0146 7.1071 0 4.6448-3.8334 7.5828-3.8334 2.938-9.3455 2.938-7.275 0-12.619-3.2458v-6.9952q4.9246 3.6655 11.024 3.6655 7.8906 0 7.8906-4.393 0-1.9866-1.427-3.3017-1.427-1.3151-3.6095-1.9307-2.1825-0.64356-4.6728-1.483-2.4903-0.8674-4.6728-1.8747-2.1825-1.0073-3.6095-3.1338-1.427-2.1545-1.427-5.3163z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m446.63 72.912v-38.222h6.8832v38.222z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
          <path
            d="m462.91 62.028q-1.0912-3.5535-1.0912-8.2543 0-4.7008 1.0912-8.2543 1.0912-3.5535 2.7981-5.6521 1.7348-2.1265 4.1691-3.4416 2.4343-1.3431 4.7567-1.7908 2.3224-0.44769 5.0085-0.44769 5.848 0 11.584 2.2664v6.4356q-5.4562-2.5183-10.968-2.5183-2.5742 0-4.4209 0.47567-1.8188 0.44769-3.5815 1.7628-1.7348 1.3151-2.6582 4.1132-0.89539 2.7981-0.89539 7.0511 0 4.2531 0.89539 7.0511 0.92336 2.7981 2.6582 4.1132 1.7628 1.3151 3.5815 1.7908 1.8467 0.44769 4.4209 0.44769 5.5122 0 10.968-2.5183v6.4076q-5.736 2.2944-11.584 2.2944-2.6862 0-5.0085-0.44769-2.3224-0.44769-4.7567-1.7628-2.4343-1.3431-4.1691-3.4416-1.7068-2.1265-2.7981-5.6801z"
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
          />
        </g>
      </svg>

      <svg
        className="Logo__Mobile"
        height="42"
        width="186"
        version="1.1"
        viewBox="0 0 500 122"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linearGradient196m"
            x2="1"
            gradientTransform="matrix(0,628.28,628.28,0,2679.4,6684.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8cd7bd" offset="0" />
            <stop stopColor="#8cd7bd" offset=".005618" />
            <stop stopColor="#37bba6" offset=".5" />
            <stop stopColor="#00a287" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient206m"
            x2="1"
            gradientTransform="matrix(0,628.28,628.28,0,3285.1,6684.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7a6bbc" offset="0" />
            <stop stopColor="#6155ae" offset=".30303" />
            <stop stopColor="#332b75" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient220m"
            x2="1"
            gradientTransform="matrix(0,489.39,489.39,0,2746.4,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55b5cc" offset="0" />
            <stop stopColor="#55b5cc" offset=".011236" />
            <stop stopColor="#0799be" offset=".5" />
            <stop stopColor="#137c88" offset=".99438" />
            <stop stopColor="#137c88" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient230m"
            x2="1"
            gradientTransform="matrix(210.01,0,0,-210.01,2980.3,7154.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8e44a2" offset="0" />
            <stop stopColor="#882a98" offset=".52116" />
            <stop stopColor="#6e2090" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient238m"
            x2="1"
            gradientTransform="matrix(0,489.39,489.39,0,3220.2,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1574c4" offset="0" />
            <stop stopColor="#413d75" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient252m"
            x2="1"
            gradientTransform="matrix(229.06,0,0,-229.06,2751.2,7154.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#137c88" offset="0" />
            <stop stopColor="#137c88" offset=".0056181" />
            <stop stopColor="#0799be" offset=".5" />
            <stop stopColor="#55b5cc" offset=".98876" />
            <stop stopColor="#55b5cc" offset="1" />
          </linearGradient>
          <linearGradient
            id="linearGradient260m"
            x2="1"
            gradientTransform="matrix(0,604.34,604.34,0,2978.1,6505.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#413d75" offset="0" />
            <stop stopColor="#2e3191" offset="1" />
          </linearGradient>
        </defs>
        <g
          transform="matrix(.13333 0 0 -.13333 -335.02 975.09)"
          fillRule="evenodd"
        >
          <path
            d="m2846.2 6995.3-94.95 317.93-238.61-628.28"
            fill="url(#linearGradient196m)"
          />
          <path
            d="m3460.2 6684.9-269.89 628.28-80.3-317.93z"
            fill="url(#linearGradient206m)"
          />
          <path
            d="m2846.2 6995.3c-167.66-153.03-333.56-310.35-333.56-310.35l467.66-179.04-134.1 489.39"
            fill="url(#linearGradient220m)"
          />
          <path
            d="m2980.3 7110.2 129.71-114.95 80.3 317.93z"
            fill="url(#linearGradient230m)"
          />
          <path
            d="m3110 6995.3 350.19-310.35-479.9-179.04z"
            fill="url(#linearGradient238m)"
          />
          <path
            d="m2751.2 7313.2 229.05-202.98c-42.62-39.3-88.44-73.25-134.1-114.95l-94.95 317.93"
            fill="url(#linearGradient252m)"
          />
          <path
            d="m2980.3 7110.2 129.71-114.95-129.71-489.39-134.1 489.39c45.66 41.7 91.48 75.65 134.1 114.95"
            fill="url(#linearGradient260m)"
          />
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
