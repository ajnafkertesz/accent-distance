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
      "pages": ["Welcome to the Phonetic Similarity Study"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Previous"],
      "button_label_next": ["Next"],
      "post_trial_gap": [1000]
    },
    {
      "timeline": [
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/corral_US.mp3"],
          "choices": ["Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["<audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/corral_TR.mp3\"><\/audio>", "<audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/corral_NZ.mp3\"><\/audio>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/aftershave_US.mp3"],
          "choices": ["Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["<audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/aftershave_NZ.mp3\"><\/audio>", "<audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/aftershave_TR.mp3\"><\/audio>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/bagel_US.mp3"],
          "choices": ["Next"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Voice 1", "Voice 2"],
          "button_html": ["<div style=\"display:inline-block; width:45%; margin: 1%; text-align:center; vertical-align:top;\"><audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/bagel_TR.mp3\"><\/audio><div style=\"display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; border-radius:6px; cursor:pointer; font-weight:bold;\">bagel_TR.mp3<\/div><\/div>", "<div style=\"display:inline-block; width:45%; margin: 1%; text-align:center; vertical-align:top;\"><audio controls preload=\"none\" onclick=\"this.play()\"><source type=\"audio/mpeg\" src=\"resource/audio/bagel_NZ.mp3\"><\/audio><div style=\"display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; border-radius:6px; cursor:pointer; font-weight:bold;\">bagel_NZ.mp3<\/div><\/div>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [0]
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["All done! Press the space button before exiting this window!"],
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
