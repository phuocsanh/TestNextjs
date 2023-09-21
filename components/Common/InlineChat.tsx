import Script from "next/script";
import { FC } from "react";
const InlineSupportChat: FC = ({}) => {
  return (
    <>
      <div id="tawk_64fdd0cba91e863a5c12b181"></div>
      <Script id="chat-support" strategy="afterInteractive">
        {`
                     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                     (function(){
                     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                     s1.async=true;
                     s1.src='https://embed.tawk.to/650347cfb1aaa13b7a76e5a3/1haad1mjj';
                     s1.charset='UTF-8';
                     s1.setAttribute('crossorigin','*');
                     s0.parentNode.insertBefore(s1,s0);
                     })();
                  `}
      </Script>
    </>
  );
};
export default InlineSupportChat;
