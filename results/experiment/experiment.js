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
          "pages": ["Trial 1: Click on the \"Next\" button to get started."],
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
          "stimulus": ["resource/audio/freezer_US.mp3"],
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
          "stimulus": ["resource/audio/freezer_NZ.mp3"],
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
          "stimulus": ["resource/audio/freezer_TR.mp3"],
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
            "speakers": ["freezer_NZ.mp3", "freezer_TR.mp3"]
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
