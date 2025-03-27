audio_html <- to_vec(
  for(audio in random_other) 
    paste('<video height="auto" controls="controls" preload="none" onclick="this.play()">', 
          '<source type="video/mp4" src=resource/audio/', audio, '></video>', sep="", collapse=NULL)
) 
random_audio_html <- sample(html_images)
audio_html <- stringr::str_match(random_html_images, '^<img src=\"resource/image/([a-zA-Z ]*)')[,2]