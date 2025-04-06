var timeline = {
  "timeline": [
    {
      "timeline": [
        {
          "type": ["survey-text"],
          "questions": [
            {
              "prompt": ["Participant ID"],
              "placeholder": ["#"],
              "rows": [1],
              "columns": [40],
              "required": [true],
              "name": ["Participant ID"]
            }
          ],
          "randomize_question_order": false,
          "preamble": [""],
          "button_label": ["Next"],
          "post_trial_gap": [0]
        }
      ]
    },
    {
      "type": ["instructions"],
      "pages": ["Welcome to the Phonetic Similarity Study! \n  First you will see the audio icon on the top turn black and you will hear a target word. \n  Next the audio icon under speaker 1 will turn black and you'll hear from them, followed by speaker 2 shortly after.\n  Please select the speaker that sounds most similar to the target. There will be 30 trials in total. Click next to begin the study."],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [250]
    },
    {
      "timeline": [
        {
          "type": ["instructions"],
          "pages": ["Trial 1: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/matchbook_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/matchbook_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/matchbook_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["matchbook_TR.mp3", "matchbook_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 2: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/butterfly_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/butterfly_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/butterfly_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["butterfly_TR.mp3", "butterfly_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 3: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mainland_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mainland_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mainland_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["mainland_NZ.mp3", "mainland_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 4: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/gadget_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/gadget_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/gadget_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["gadget_TR.mp3", "gadget_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 5: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/corkscrew_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/corkscrew_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/corkscrew_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["corkscrew_TR.mp3", "corkscrew_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 6: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/palace_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/palace_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/palace_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["palace_TR.mp3", "palace_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 7: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/pizza_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/pizza_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/pizza_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["pizza_TR.mp3", "pizza_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 8: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/beetle_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/beetle_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/beetle_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["beetle_NZ.mp3", "beetle_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 9: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/shellfish_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/shellfish_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/shellfish_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["shellfish_TR.mp3", "shellfish_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 10: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rattlesnake_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rattlesnake_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rattlesnake_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["rattlesnake_NZ.mp3", "rattlesnake_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 11: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/musket_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/musket_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/musket_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["musket_TR.mp3", "musket_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 12: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/elephant_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/elephant_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/elephant_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["elephant_NZ.mp3", "elephant_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 13: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/museum_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/museum_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/museum_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["museum_NZ.mp3", "museum_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 14: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/aftershave_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/aftershave_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/aftershave_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["aftershave_NZ.mp3", "aftershave_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 15: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vocabulary_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vocabulary_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vocabulary_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["vocabulary_NZ.mp3", "vocabulary_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 16: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/eyeliner_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/eyeliner_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/eyeliner_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["eyeliner_NZ.mp3", "eyeliner_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 17: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/catfish_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/catfish_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/catfish_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["catfish_TR.mp3", "catfish_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 18: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/snake_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/snake_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/snake_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["snake_TR.mp3", "snake_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 19: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/wallet_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/wallet_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/wallet_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["wallet_NZ.mp3", "wallet_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 20: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/goose_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/goose_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/goose_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["goose_TR.mp3", "goose_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 21: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/spider_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/spider_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/spider_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["spider_NZ.mp3", "spider_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 22: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dolphin_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dolphin_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dolphin_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["dolphin_TR.mp3", "dolphin_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 23: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/salmon_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/salmon_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/salmon_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["salmon_TR.mp3", "salmon_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 24: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dynamite_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dynamite_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/dynamite_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["dynamite_TR.mp3", "dynamite_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 25: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/barbershop_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/barbershop_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/barbershop_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["barbershop_TR.mp3", "barbershop_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 26: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/parrot_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/parrot_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/parrot_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["parrot_TR.mp3", "parrot_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 27: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/diamond_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/diamond_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/diamond_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["diamond_TR.mp3", "diamond_NZ.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 28: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/playground_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/playground_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/playground_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to listen."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["playground_NZ.mp3", "playground_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 29: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/casket_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/casket_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/casket_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["casket_NZ.mp3", "casket_TR.mp3"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["Trial 30: Click on the \"Next\" button to listen."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/grandmother_US.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/grandmother_NZ.mp3"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/grandmother_TR.mp3"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Target<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Speaker 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Please select the speaker that sounds most similar to the target"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["grandmother_NZ.mp3", "grandmother_TR.mp3"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["Thank you for your participation, your responses have been recorded! Please let the research assistant know that you're ready to complete a brief demographic questionnaire. Press SPACE to exit."],
      "choices": jsPsych.ANY_KEY,
      "response_ends_trial": true,
      "post_trial_gap": [0]
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "use_webaudio": [true],
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
