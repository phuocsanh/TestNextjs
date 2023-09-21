import Script from "next/script";
import { FC } from "react";

type SupportChatProps = {
  measurementId?: string;
};
const SupportChat: FC<SupportChatProps> = ({ measurementId }) => {
  return (
    <>
      <div id="tawk_64fdd0cba91e863a5c12b181"></div>
      <Script id="chat-support" strategy="afterInteractive">
        {`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_64fdd0cba91e863a5c12b181';
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/64fdd0cba91e863a5c12b181/1haab55of';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);})();
                `}
      </Script>
    </>
  );
};


export default SupportChat;
