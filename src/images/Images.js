import React from "react";
const Tam = '30'
export function Logo({height,widht}) {
    const Height = height != undefined ? height : '90'
    const Widht = widht != undefined ? widht : '321'
    return (
        <svg preserveAspectRatio="xMidYMid"
         width={Widht} height={Height} viewBox="0 0 321 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M132.252 46.56C129.985 46.56 127.785 46.28 125.652 45.72C123.519 45.16 121.785 44.4133 120.452 43.48L123.052 37.64C124.305 38.4667 125.759 39.1333 127.412 39.64C129.065 40.1467 130.692 40.4 132.292 40.4C135.332 40.4 136.852 39.64 136.852 38.12C136.852 37.32 136.412 36.7333 135.532 36.36C134.679 35.96 133.292 35.5467 131.372 35.12C129.265 34.6667 127.505 34.1867 126.092 33.68C124.679 33.1467 123.465 32.3067 122.452 31.16C121.439 30.0133 120.932 28.4667 120.932 26.52C120.932 24.8133 121.399 23.28 122.332 21.92C123.265 20.5333 124.652 19.44 126.492 18.64C128.359 17.84 130.639 17.44 133.332 17.44C135.172 17.44 136.985 17.6533 138.772 18.08C140.559 18.48 142.132 19.08 143.492 19.88L141.052 25.76C138.385 24.32 135.799 23.6 133.292 23.6C131.719 23.6 130.572 23.84 129.852 24.32C129.132 24.7733 128.772 25.3733 128.772 26.12C128.772 26.8667 129.199 27.4267 130.052 27.8C130.905 28.1733 132.279 28.56 134.172 28.96C136.305 29.4133 138.065 29.9067 139.452 30.44C140.865 30.9467 142.079 31.7733 143.092 32.92C144.132 34.04 144.652 35.5733 144.652 37.52C144.652 39.2 144.185 40.72 143.252 42.08C142.319 43.44 140.919 44.5333 139.052 45.36C137.185 46.16 134.919 46.56 132.252 46.56ZM159.55 40.56C160.59 40.56 161.484 40.4133 162.23 40.12C163.004 39.8267 163.777 39.3467 164.55 38.68L168.51 42.84C166.457 45.1867 163.39 46.36 159.31 46.36C156.777 46.36 154.55 45.88 152.63 44.92C150.71 43.96 149.217 42.6267 148.15 40.92C147.11 39.2133 146.59 37.28 146.59 35.12C146.59 32.9867 147.11 31.08 148.15 29.4C149.19 27.6933 150.617 26.36 152.43 25.4C154.27 24.44 156.324 23.96 158.59 23.96C160.697 23.96 162.617 24.4 164.35 25.28C166.11 26.1333 167.51 27.4 168.55 29.08C169.59 30.7333 170.11 32.7067 170.11 35L154.63 37.96C155.457 39.6933 157.097 40.56 159.55 40.56ZM158.63 29.36C157.324 29.36 156.257 29.7733 155.43 30.6C154.604 31.4 154.137 32.56 154.03 34.08L162.83 32.36C162.564 31.4533 162.057 30.7333 161.31 30.2C160.564 29.64 159.67 29.36 158.63 29.36ZM185.215 40.56C186.255 40.56 187.148 40.4133 187.895 40.12C188.668 39.8267 189.441 39.3467 190.215 38.68L194.175 42.84C192.121 45.1867 189.055 46.36 184.975 46.36C182.441 46.36 180.215 45.88 178.295 44.92C176.375 43.96 174.881 42.6267 173.815 40.92C172.775 39.2133 172.255 37.28 172.255 35.12C172.255 32.9867 172.775 31.08 173.815 29.4C174.855 27.6933 176.281 26.36 178.095 25.4C179.935 24.44 181.988 23.96 184.255 23.96C186.361 23.96 188.281 24.4 190.015 25.28C191.775 26.1333 193.175 27.4 194.215 29.08C195.255 30.7333 195.775 32.7067 195.775 35L180.295 37.96C181.121 39.6933 182.761 40.56 185.215 40.56ZM184.295 29.36C182.988 29.36 181.921 29.7733 181.095 30.6C180.268 31.4 179.801 32.56 179.695 34.08L188.495 32.36C188.228 31.4533 187.721 30.7333 186.975 30.2C186.228 29.64 185.335 29.36 184.295 29.36ZM211.279 18H219.199V39.72H232.559V46H211.279V18ZM258.175 24.32V46H250.935V43.84C249.522 45.52 247.389 46.36 244.535 46.36C242.562 46.36 240.762 45.9067 239.135 45C237.535 44.0667 236.255 42.7467 235.295 41.04C234.362 39.3333 233.895 37.36 233.895 35.12C233.895 32.88 234.362 30.92 235.295 29.24C236.255 27.5333 237.535 26.2267 239.135 25.32C240.762 24.4133 242.562 23.96 244.535 23.96C247.095 23.96 249.109 24.7067 250.575 26.2V24.32H258.175ZM246.135 40.32C247.469 40.32 248.562 39.8667 249.415 38.96C250.269 38.0267 250.695 36.7467 250.695 35.12C250.695 33.52 250.269 32.2667 249.415 31.36C248.562 30.4533 247.469 30 246.135 30C244.802 30 243.709 30.4533 242.855 31.36C242.002 32.2667 241.575 33.52 241.575 35.12C241.575 36.7467 242.002 38.0267 242.855 38.96C243.709 39.8667 244.802 40.32 246.135 40.32ZM277.028 45.12C276.388 45.52 275.601 45.8267 274.668 46.04C273.761 46.2533 272.788 46.36 271.748 46.36C268.921 46.36 266.748 45.6667 265.228 44.28C263.734 42.8933 262.988 40.8267 262.988 38.08V19.48H270.588V25.12H275.508V30.8H270.588V38C270.588 38.8 270.788 39.4133 271.188 39.84C271.588 40.2667 272.134 40.48 272.828 40.48C273.708 40.48 274.481 40.2533 275.148 39.8L277.028 45.12ZM290.918 40.56C291.958 40.56 292.851 40.4133 293.598 40.12C294.371 39.8267 295.144 39.3467 295.918 38.68L299.878 42.84C297.824 45.1867 294.758 46.36 290.678 46.36C288.144 46.36 285.918 45.88 283.998 44.92C282.078 43.96 280.584 42.6267 279.518 40.92C278.478 39.2133 277.958 37.28 277.958 35.12C277.958 32.9867 278.478 31.08 279.518 29.4C280.558 27.6933 281.984 26.36 283.798 25.4C285.638 24.44 287.691 23.96 289.958 23.96C292.064 23.96 293.984 24.4 295.718 25.28C297.478 26.1333 298.878 27.4 299.918 29.08C300.958 30.7333 301.478 32.7067 301.478 35L285.998 37.96C286.824 39.6933 288.464 40.56 290.918 40.56ZM289.998 29.36C288.691 29.36 287.624 29.7733 286.798 30.6C285.971 31.4 285.504 32.56 285.398 34.08L294.198 32.36C293.931 31.4533 293.424 30.7333 292.678 30.2C291.931 29.64 291.038 29.36 289.998 29.36ZM312.222 26.92C312.995 25.9333 313.995 25.2 315.222 24.72C316.475 24.2133 317.902 23.96 319.502 23.96V30.8C318.808 30.72 318.235 30.68 317.782 30.68C316.155 30.68 314.875 31.12 313.942 32C313.035 32.88 312.582 34.2267 312.582 36.04V46H304.982V24.32H312.222V26.92Z" fill="#EFEFEF" />
            <path d="M124.112 61.552H119.684V60.4H129.872V61.552H125.444V73H124.112V61.552ZM134.533 63.46C135.769 63.46 136.717 63.772 137.377 64.396C138.037 65.008 138.367 65.92 138.367 67.132V73H137.143V71.524C136.855 72.016 136.429 72.4 135.865 72.676C135.313 72.952 134.653 73.09 133.885 73.09C132.829 73.09 131.989 72.838 131.365 72.334C130.741 71.83 130.429 71.164 130.429 70.336C130.429 69.532 130.717 68.884 131.293 68.392C131.881 67.9 132.811 67.654 134.083 67.654H137.089V67.078C137.089 66.262 136.861 65.644 136.405 65.224C135.949 64.792 135.283 64.576 134.407 64.576C133.807 64.576 133.231 64.678 132.679 64.882C132.127 65.074 131.653 65.344 131.257 65.692L130.681 64.738C131.161 64.33 131.737 64.018 132.409 63.802C133.081 63.574 133.789 63.46 134.533 63.46ZM134.083 72.082C134.803 72.082 135.421 71.92 135.937 71.596C136.453 71.26 136.837 70.78 137.089 70.156V68.608H134.119C132.499 68.608 131.689 69.172 131.689 70.3C131.689 70.852 131.899 71.29 132.319 71.614C132.739 71.926 133.327 72.082 134.083 72.082ZM145.366 68.248L143.134 70.3V73H141.856V59.644H143.134V68.698L148.786 63.532H150.37L146.32 67.402L150.748 73H149.182L145.366 68.248ZM160.542 68.662H152.622C152.694 69.646 153.072 70.444 153.756 71.056C154.44 71.656 155.304 71.956 156.348 71.956C156.936 71.956 157.476 71.854 157.968 71.65C158.46 71.434 158.886 71.122 159.246 70.714L159.966 71.542C159.546 72.046 159.018 72.43 158.382 72.694C157.758 72.958 157.068 73.09 156.312 73.09C155.34 73.09 154.476 72.886 153.72 72.478C152.976 72.058 152.394 71.482 151.974 70.75C151.554 70.018 151.344 69.19 151.344 68.266C151.344 67.342 151.542 66.514 151.938 65.782C152.346 65.05 152.898 64.48 153.594 64.072C154.302 63.664 155.094 63.46 155.97 63.46C156.846 63.46 157.632 63.664 158.328 64.072C159.024 64.48 159.57 65.05 159.966 65.782C160.362 66.502 160.56 67.33 160.56 68.266L160.542 68.662ZM155.97 64.558C155.058 64.558 154.29 64.852 153.666 65.44C153.054 66.016 152.706 66.772 152.622 67.708H159.336C159.252 66.772 158.898 66.016 158.274 65.44C157.662 64.852 156.894 64.558 155.97 64.558ZM175.864 63.532L171.13 74.134C170.746 75.022 170.302 75.652 169.798 76.024C169.294 76.396 168.688 76.582 167.98 76.582C167.524 76.582 167.098 76.51 166.702 76.366C166.306 76.222 165.964 76.006 165.676 75.718L166.27 74.764C166.75 75.244 167.326 75.484 167.998 75.484C168.43 75.484 168.796 75.364 169.096 75.124C169.408 74.884 169.696 74.476 169.96 73.9L170.374 72.982L166.144 63.532H167.476L171.04 71.578L174.604 63.532H175.864ZM181.288 73.09C180.376 73.09 179.554 72.886 178.822 72.478C178.09 72.058 177.514 71.482 177.094 70.75C176.674 70.018 176.464 69.19 176.464 68.266C176.464 67.342 176.674 66.514 177.094 65.782C177.514 65.05 178.09 64.48 178.822 64.072C179.554 63.664 180.376 63.46 181.288 63.46C182.2 63.46 183.022 63.664 183.754 64.072C184.486 64.48 185.056 65.05 185.464 65.782C185.884 66.514 186.094 67.342 186.094 68.266C186.094 69.19 185.884 70.018 185.464 70.75C185.056 71.482 184.486 72.058 183.754 72.478C183.022 72.886 182.2 73.09 181.288 73.09ZM181.288 71.956C181.96 71.956 182.56 71.806 183.088 71.506C183.628 71.194 184.048 70.756 184.348 70.192C184.648 69.628 184.798 68.986 184.798 68.266C184.798 67.546 184.648 66.904 184.348 66.34C184.048 65.776 183.628 65.344 183.088 65.044C182.56 64.732 181.96 64.576 181.288 64.576C180.616 64.576 180.01 64.732 179.47 65.044C178.942 65.344 178.522 65.776 178.21 66.34C177.91 66.904 177.76 67.546 177.76 68.266C177.76 68.986 177.91 69.628 178.21 70.192C178.522 70.756 178.942 71.194 179.47 71.506C180.01 71.806 180.616 71.956 181.288 71.956ZM197.253 63.532V73H196.029V71.272C195.693 71.848 195.231 72.298 194.643 72.622C194.055 72.934 193.383 73.09 192.627 73.09C191.391 73.09 190.413 72.748 189.693 72.064C188.985 71.368 188.631 70.354 188.631 69.022V63.532H189.909V68.896C189.909 69.892 190.155 70.648 190.647 71.164C191.139 71.68 191.841 71.938 192.753 71.938C193.749 71.938 194.535 71.638 195.111 71.038C195.687 70.426 195.975 69.58 195.975 68.5V63.532H197.253ZM202.075 65.386C202.375 64.75 202.819 64.27 203.407 63.946C204.007 63.622 204.745 63.46 205.621 63.46V64.702L205.315 64.684C204.319 64.684 203.539 64.99 202.975 65.602C202.411 66.214 202.129 67.072 202.129 68.176V73H200.851V63.532H202.075V65.386ZM215.54 61.552H211.112V60.4H221.3V61.552H216.872V73H215.54V61.552ZM222.93 63.532H224.208V73H222.93V63.532ZM223.578 61.462C223.314 61.462 223.092 61.372 222.912 61.192C222.732 61.012 222.642 60.796 222.642 60.544C222.642 60.304 222.732 60.094 222.912 59.914C223.092 59.734 223.314 59.644 223.578 59.644C223.842 59.644 224.064 59.734 224.244 59.914C224.424 60.082 224.514 60.286 224.514 60.526C224.514 60.79 224.424 61.012 224.244 61.192C224.064 61.372 223.842 61.462 223.578 61.462ZM239.59 63.46C240.778 63.46 241.708 63.802 242.38 64.486C243.064 65.17 243.406 66.178 243.406 67.51V73H242.128V67.636C242.128 66.652 241.888 65.902 241.408 65.386C240.94 64.87 240.274 64.612 239.41 64.612C238.426 64.612 237.652 64.918 237.088 65.53C236.524 66.13 236.242 66.964 236.242 68.032V73H234.964V67.636C234.964 66.652 234.724 65.902 234.244 65.386C233.776 64.87 233.104 64.612 232.228 64.612C231.256 64.612 230.482 64.918 229.906 65.53C229.342 66.13 229.06 66.964 229.06 68.032V73H227.782V63.532H229.006V65.26C229.342 64.684 229.81 64.24 230.41 63.928C231.01 63.616 231.7 63.46 232.48 63.46C233.272 63.46 233.956 63.628 234.532 63.964C235.12 64.3 235.558 64.798 235.846 65.458C236.194 64.834 236.692 64.348 237.34 64C238 63.64 238.75 63.46 239.59 63.46ZM255.169 68.662H247.249C247.321 69.646 247.699 70.444 248.383 71.056C249.067 71.656 249.931 71.956 250.975 71.956C251.563 71.956 252.103 71.854 252.595 71.65C253.087 71.434 253.513 71.122 253.873 70.714L254.593 71.542C254.173 72.046 253.645 72.43 253.009 72.694C252.385 72.958 251.695 73.09 250.939 73.09C249.967 73.09 249.103 72.886 248.347 72.478C247.603 72.058 247.021 71.482 246.601 70.75C246.181 70.018 245.971 69.19 245.971 68.266C245.971 67.342 246.169 66.514 246.565 65.782C246.973 65.05 247.525 64.48 248.221 64.072C248.929 63.664 249.721 63.46 250.597 63.46C251.473 63.46 252.259 63.664 252.955 64.072C253.651 64.48 254.197 65.05 254.593 65.782C254.989 66.502 255.187 67.33 255.187 68.266L255.169 68.662ZM250.597 64.558C249.685 64.558 248.917 64.852 248.293 65.44C247.681 66.016 247.333 66.772 247.249 67.708H253.963C253.879 66.772 253.525 66.016 252.901 65.44C252.289 64.852 251.521 64.558 250.597 64.558Z" fill="#EFEFEF" />
            <path d="M5.39827 62L53.5862 36.8207L101.774 62L53.5862 87.1793L5.39827 62Z" stroke="#5DDADB" stroke-width="5" />
            <line y1="-2.5" x2="55.8587" y2="-2.5" transform="matrix(0.890136 -0.455695 0.545647 0.838015 23.0007 71.2791)" stroke="#5DDADB" stroke-width="5" />
            <line y1="-2.5" x2="55.8587" y2="-2.5" transform="matrix(0.890136 -0.455695 0.545647 0.838015 39.2679 80.6124)" stroke="#5DDADB" stroke-width="5" />
            <path d="M5.39827 28L53.5862 2.82072L101.774 28L53.5862 53.1793L5.39827 28Z" stroke="#F78EB6" stroke-width="5" />
            <line y1="-2.5" x2="55.8587" y2="-2.5" transform="matrix(0.890136 -0.455695 0.545647 0.838015 22.0438 38.2791)" stroke="#F78EB6" stroke-width="5" />
            <line y1="-2.5" x2="54.9277" y2="-2.5" transform="matrix(0.890136 -0.455695 0.545647 0.838015 40.2249 46.6124)" stroke="#F78EB6" stroke-width="5" />
        </svg>
    )
}

export function GitHub() {
    return (
        <svg width={Tam} height={Tam} viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
            </g>
        </svg>
    )
}
export function Linkedin() {
    return (
        <svg width={Tam} height={Tam} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z" fill="black" />
        </svg>
    )
}
export function Email() {
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 512 512" width={Tam} height={Tam} >
<g>
	<g>
		<path d="M464,64h-16H64H48C21.504,64,0,85.504,0,112v16v256v16c0,26.496,21.504,48,48,48h16h384h16c26.496,0,48-21.504,48-48v-16
			V128v-16C512,85.504,490.496,64,464,64z M407.488,96L256,215.616L104.512,96H407.488z M448,416H64V148.672l192,147.68L448,148.64
			V416z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
    )
}

export function Gradient(){
<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1920 1080L-2.563e-05 1080L-2.563e-05 1.2964e-06L1920 1.2964e-06L1920 1080Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="173.5" y1="190.5" x2="1733.5" y2="957" gradientUnits="userSpaceOnUse">
<stop stop-color="#131D47"/>
<stop offset="1" stop-color="#5DDADB"/>
</linearGradient>
</defs>
</svg>
}