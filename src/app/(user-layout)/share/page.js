'use client'

import { Component } from 'react';
import {
        EmailShareButton,
        FacebookShareButton,
        FacebookMessengerShareButton,
        HatenaShareButton,
        InstapaperShareButton,
        LineShareButton,
        LinkedinShareButton,
        LivejournalShareButton,
        MailruShareButton,
        OKShareButton,
        PinterestShareButton,
        PocketShareButton,
        RedditShareButton,
        TelegramShareButton,
        TumblrShareButton,
        TwitterShareButton,
        ViberShareButton,
        VKShareButton,
        WhatsappShareButton,
        WorkplaceShareButton,
        WeiboShareButton,
        EmailIcon,
        FacebookIcon,
        FacebookMessengerIcon,
        HatenaIcon,
        InstapaperIcon,
        LineIcon,
        LinkedinIcon,
        LivejournalIcon,
        MailruIcon,
        OKIcon,
        PinterestIcon,
        PocketIcon,
        RedditIcon,
        TelegramIcon,
        TumblrIcon,
        TwitterIcon,
        ViberIcon,
        VKIcon,
        WeiboIcon,
        WhatsappIcon,
        WorkplaceIcon

} from 'react-share';

export default class App extends Component {
  render() {
    const shareUrl = 'https://test-another-next-proj.vercel.app/';
    return (
      <div
        style={{
          background: '#0000',
          width: '100%',
        }}
      >
        <h1 className='text-5xl font-serif text-gray-600 text-center my-3'>Share Our Website Please</h1>

      <div className='grid grid-cols-3 gap-10 py-5 justify-center mx-auto place-items-center  '>
        {/* start */}
      <div className='p-5 shadow-green-200 shadow-2xl w-28  rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
      <FacebookShareButton
          url={shareUrl}
          quote={'Facebook'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={40} round={true} />
         
        </FacebookShareButton>
        <h1 className='text-center'>FaceBook</h1>
      </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <h1>WhatsApp</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <EmailShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
        <h1>Mail</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <HatenaShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <HatenaIcon size={40} round={true} />
        </HatenaShareButton>
        <h1>Hatena</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <FacebookMessengerShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookMessengerIcon size={40} round={true} />
        </FacebookMessengerShareButton>
        <h1>Messenger</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <InstapaperShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <InstapaperIcon size={40} round={true} />
        </InstapaperShareButton>
        <h1>Instapaper</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <LineShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <LineIcon size={40} round={true} />
        </LineShareButton>
        <h1>Line</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <LinkedinShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
        <h1>Linkedin</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <MailruShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <MailruIcon size={40} round={true} />
        </MailruShareButton>
        <h1>Mailru</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <LivejournalShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <LivejournalIcon size={40} round={true} />
        </LivejournalShareButton>
        <h1>LiveJournal</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <OKShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <OKIcon size={40} round={true} />
        </OKShareButton>
        <h1>Ok</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <PinterestShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <PinterestIcon size={40} round={true} />
        </PinterestShareButton>
        <h1>Pinterest</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <PocketShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <PocketIcon size={40} round={true} />
        </PocketShareButton>
        <h1>Pocket</h1>
       </div>
       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <RedditShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <RedditIcon size={40} round={true} />
        </RedditShareButton>
        <h1>Reddit</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <TelegramShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
        <h1>Telagram</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <TumblrShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TumblrIcon size={40} round={true} />
        </TumblrShareButton>
        <h1>Tumblr</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <TwitterShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <h1>Twitter</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <ViberShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <ViberIcon size={40} round={true} />
        </ViberShareButton>
        <h1>Viber</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <VKShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <VKIcon size={40} round={true} />
        </VKShareButton>
        <h1>Vk</h1>
       </div>

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <WorkplaceShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WorkplaceIcon size={40} round={true} />
        </WorkplaceShareButton>
        <h1>WorkPlace</h1>
       </div>

      

       <div className='p-5 shadow-green-200 shadow-2xl w-28 rounded-2xl  text-center flex flex-col items-center hover:bg-green-200'>
       <WeiboShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WeiboIcon size={40} round={true} />
        </WeiboShareButton>
        <h1>Weibo</h1>
       </div>

       {/* end */}
      </div>
      </div>
    );
  }
}