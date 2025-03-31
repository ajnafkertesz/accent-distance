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
      "pages": ["Welcome to the Phonetic Similarity Study \n First you will hear a target word, followed by two differently accented pronunciations of the same word. \n Please select the word that sounds most similar to the target. \n There will be 30 trials in total. "],
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
          "stimulus": ["resource/audio/palace_NZ.mp3"],
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
          "stimulus": ["resource/audio/palace_TR.mp3"],
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
            "speakers": ["palace_NZ.mp3", "palace_TR.mp3"]
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
          "stimulus": ["resource/audio/rattlesnake_TR.mp3"],
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
          "stimulus": ["resource/audio/rattlesnake_NZ.mp3"],
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
            "speakers": ["rattlesnake_TR.mp3", "rattlesnake_NZ.mp3"]
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
          "stimulus": ["resource/audio/aquarium_US.mp3"],
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
          "stimulus": ["resource/audio/aquarium_TR.mp3"],
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
          "stimulus": ["resource/audio/aquarium_NZ.mp3"],
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
            "speakers": ["aquarium_TR.mp3", "aquarium_NZ.mp3"]
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
          "stimulus": ["resource/audio/uranium_US.mp3"],
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
          "stimulus": ["resource/audio/uranium_TR.mp3"],
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
          "stimulus": ["resource/audio/uranium_NZ.mp3"],
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
            "speakers": ["uranium_TR.mp3", "uranium_NZ.mp3"]
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
          "stimulus": ["resource/audio/swordfish_US.mp3"],
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
          "stimulus": ["resource/audio/swordfish_NZ.mp3"],
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
          "stimulus": ["resource/audio/swordfish_TR.mp3"],
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
            "speakers": ["swordfish_NZ.mp3", "swordfish_TR.mp3"]
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
          "stimulus": ["resource/audio/cricket_US.mp3"],
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
          "stimulus": ["resource/audio/cricket_TR.mp3"],
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
          "stimulus": ["resource/audio/cricket_NZ.mp3"],
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
            "speakers": ["cricket_TR.mp3", "cricket_NZ.mp3"]
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
          "stimulus": ["resource/audio/bacteria_US.mp3"],
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
          "stimulus": ["resource/audio/bacteria_NZ.mp3"],
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
          "stimulus": ["resource/audio/bacteria_TR.mp3"],
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
            "speakers": ["bacteria_NZ.mp3", "bacteria_TR.mp3"]
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
          "stimulus": ["resource/audio/scorpion_US.mp3"],
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
          "stimulus": ["resource/audio/scorpion_NZ.mp3"],
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
          "stimulus": ["resource/audio/scorpion_TR.mp3"],
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
            "speakers": ["scorpion_NZ.mp3", "scorpion_TR.mp3"]
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
          "stimulus": ["resource/audio/missile_US.mp3"],
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
          "stimulus": ["resource/audio/missile_NZ.mp3"],
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
          "stimulus": ["resource/audio/missile_TR.mp3"],
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
            "speakers": ["missile_NZ.mp3", "missile_TR.mp3"]
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
          "stimulus": ["resource/audio/giraffe_US.mp3"],
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
          "stimulus": ["resource/audio/giraffe_TR.mp3"],
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
          "stimulus": ["resource/audio/giraffe_NZ.mp3"],
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
            "speakers": ["giraffe_TR.mp3", "giraffe_NZ.mp3"]
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
          "stimulus": ["resource/audio/bagel_US.mp3"],
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
          "stimulus": ["resource/audio/bagel_TR.mp3"],
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
          "stimulus": ["resource/audio/bagel_NZ.mp3"],
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
            "speakers": ["bagel_TR.mp3", "bagel_NZ.mp3"]
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
          "stimulus": ["resource/audio/kitten_US.mp3"],
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
          "stimulus": ["resource/audio/kitten_NZ.mp3"],
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
          "stimulus": ["resource/audio/kitten_TR.mp3"],
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
            "speakers": ["kitten_NZ.mp3", "kitten_TR.mp3"]
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
          "stimulus": ["resource/audio/penguin_US.mp3"],
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
          "stimulus": ["resource/audio/penguin_NZ.mp3"],
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
          "stimulus": ["resource/audio/penguin_TR.mp3"],
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
            "speakers": ["penguin_NZ.mp3", "penguin_TR.mp3"]
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
          "stimulus": ["resource/audio/manicure_US.mp3"],
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
          "stimulus": ["resource/audio/manicure_NZ.mp3"],
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
          "stimulus": ["resource/audio/manicure_TR.mp3"],
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
            "speakers": ["manicure_NZ.mp3", "manicure_TR.mp3"]
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
          "stimulus": ["resource/audio/racquetball_US.mp3"],
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
          "stimulus": ["resource/audio/racquetball_NZ.mp3"],
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
          "stimulus": ["resource/audio/racquetball_TR.mp3"],
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
            "speakers": ["racquetball_NZ.mp3", "racquetball_TR.mp3"]
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
          "stimulus": ["resource/audio/panda_US.mp3"],
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
          "stimulus": ["resource/audio/panda_TR.mp3"],
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
          "stimulus": ["resource/audio/panda_NZ.mp3"],
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
            "speakers": ["panda_TR.mp3", "panda_NZ.mp3"]
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
          "stimulus": ["resource/audio/zebra_US.mp3"],
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
          "stimulus": ["resource/audio/zebra_TR.mp3"],
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
          "stimulus": ["resource/audio/zebra_NZ.mp3"],
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
            "speakers": ["zebra_TR.mp3", "zebra_NZ.mp3"]
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
          "stimulus": ["resource/audio/elephant_TR.mp3"],
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
          "stimulus": ["resource/audio/elephant_NZ.mp3"],
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
            "speakers": ["elephant_TR.mp3", "elephant_NZ.mp3"]
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
          "stimulus": ["resource/audio/email_US.mp3"],
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
          "stimulus": ["resource/audio/email_TR.mp3"],
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
          "stimulus": ["resource/audio/email_NZ.mp3"],
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
            "speakers": ["email_TR.mp3", "email_NZ.mp3"]
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
          "stimulus": ["resource/audio/octopus_US.mp3"],
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
          "stimulus": ["resource/audio/octopus_NZ.mp3"],
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
          "stimulus": ["resource/audio/octopus_TR.mp3"],
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
            "speakers": ["octopus_NZ.mp3", "octopus_TR.mp3"]
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
          "stimulus": ["resource/audio/seagull_US.mp3"],
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
          "stimulus": ["resource/audio/seagull_NZ.mp3"],
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
          "stimulus": ["resource/audio/seagull_TR.mp3"],
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
            "speakers": ["seagull_NZ.mp3", "seagull_TR.mp3"]
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
          "stimulus": ["resource/audio/chimpanzee_US.mp3"],
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
          "stimulus": ["resource/audio/chimpanzee_NZ.mp3"],
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
          "stimulus": ["resource/audio/chimpanzee_TR.mp3"],
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
            "speakers": ["chimpanzee_NZ.mp3", "chimpanzee_TR.mp3"]
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
          "stimulus": ["resource/audio/beetle_TR.mp3"],
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
          "stimulus": ["resource/audio/beetle_NZ.mp3"],
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
            "speakers": ["beetle_TR.mp3", "beetle_NZ.mp3"]
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
          "stimulus": ["resource/audio/monkey_US.mp3"],
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
          "stimulus": ["resource/audio/monkey_TR.mp3"],
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
          "stimulus": ["resource/audio/monkey_NZ.mp3"],
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
            "speakers": ["monkey_TR.mp3", "monkey_NZ.mp3"]
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
          "stimulus": ["resource/audio/walrus_US.mp3"],
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
          "stimulus": ["resource/audio/walrus_NZ.mp3"],
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
          "stimulus": ["resource/audio/walrus_TR.mp3"],
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
            "speakers": ["walrus_NZ.mp3", "walrus_TR.mp3"]
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
          "stimulus": ["resource/audio/piranha_US.mp3"],
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
          "stimulus": ["resource/audio/piranha_NZ.mp3"],
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
          "stimulus": ["resource/audio/piranha_TR.mp3"],
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
            "speakers": ["piranha_NZ.mp3", "piranha_TR.mp3"]
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
          "stimulus": ["resource/audio/rabbit_US.mp3"],
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
          "stimulus": ["resource/audio/rabbit_NZ.mp3"],
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
          "stimulus": ["resource/audio/rabbit_TR.mp3"],
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
            "speakers": ["rabbit_NZ.mp3", "rabbit_TR.mp3"]
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
          "stimulus": ["resource/audio/woodpecker_US.mp3"],
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
          "stimulus": ["resource/audio/woodpecker_NZ.mp3"],
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
          "stimulus": ["resource/audio/woodpecker_TR.mp3"],
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
            "speakers": ["woodpecker_NZ.mp3", "woodpecker_TR.mp3"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["Thank you for your participation! To receive full credit you will be redirected to complete a brief demographic questionnaire. https://utexas.qualtrics.com/jfe/form/SV_es5YLeHNdLkWZ4W"],
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
