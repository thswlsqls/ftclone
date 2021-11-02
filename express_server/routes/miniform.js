const express = require('express');
const router = express.Router();

const { Miniform } = require('../models/Miniform');
const { Question } = require('../models/Question');
const { Choice } = require('../models/Choice');
const { Answer } = require('../models/Answer');

//=================================
//             miniform
//=================================

//form

router.post('/createForm', (req, res) => {
  const miniform = new Miniform(req.body);

  miniform.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, doc: doc });
  });
});

router.get('/getMinifoms', (req, res) => {
  // miniform들을 db에서 가져와 react_server로 보냅니다.
  // workspace에서 호출하여 모두 랜더링하고  form 클릭시에 form의 id값을 전달하여 formPage에서
  // 질문, 선택지를 차례로 호출하여 랜더링
  Miniform.find()
    .populate('creator')
    .exec((err, miniforms) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, miniforms: miniforms });
    });
});

router.post('/getMyMinifoms', (req, res) => {
  // miniform들을 db에서 가져와 react_server로 보냅니다.
  // workspace에서 호출하여 모두 랜더링하고  form 클릭시에 form의 id값을 전달하여 formPage에서
  // 질문, 선택지를 차례로 호출하여 랜더링
  Miniform.find(req.body, (err, miniforms) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, miniforms: miniforms });
  });
});

router.post('/getMinifomById', (req, res) => {
  Miniform.find(req.body, (err, miniform) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, miniform: miniform });
  });
});

router.post('/updateForm', (req, res) => {
  Miniform.findByIdAndUpdate(
    req.body.miniformId,
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

router.post('/deleteMiniform', (req, res) => {
  Miniform.findByIdAndDelete(
    req.body.miniformId,
    { $set: req.body },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

//question

router.post('/createQuestion', (req, res) => {
  const question = new Question(req.body);

  question.save((err, doc) => {
    if (err) return res.json({ success: false, err: err });
    return res.status(200).json({ success: true, doc: doc });
  });
});

router.post('/getQuestions', (req, res) => {
  // miniform들을 db에서 가져와 react_server로 보냅니다.
  // workspace에서 호출하여 모두 랜더링하고  form 클릭시에 form의 id값을 전달하여 formPage에서
  // 질문, 선택지를 차례로 호출하여 랜더링
  Question.find(req.body)
    .populate('creator')
    .populate('miniformId')
    .exec((err, questions) => {
      if (err) return res.json({ success: false, err: err });
      res.status(200).json({ success: true, questions: questions });
    });
});

router.post('/getMyMinifomQuestionCount', (req, res) => {
  // miniform들을 db에서 가져와 react_server로 보냅니다.
  // workspace에서 호출하여 모두 랜더링하고  form 클릭시에 form의 id값을 전달하여 formPage에서
  // 질문, 선택지를 차례로 호출하여 랜더링
  Question.count(req.body, (err, questionsCount) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, questionsCount: questionsCount });
  });
});

router.post('/getThisMiniformAnswersCount', (req, res) => {
  Answer.count(req.body, (err, miniformsCount) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, miniformsCount: miniformsCount });
  });
});

router.post('/updateQuestion', (req, res) => {
  Question.findByIdAndUpdate(
    req.body.questionId,
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

router.post('/deleteQuestion', (req, res) => {
  Question.findByIdAndDelete(
    req.body.questionId,
    { $set: req.body },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

//choice

router.post('/createChoice', (req, res) => {
  const choice = new Choice(req.body);

  choice.save((err, doc) => {
    if (err) return res.json({ success: false, err: err });
    return res.status(200).json({ success: true, doc: doc });
  });
});

router.post('/getChoices', (req, res) => {
  Choice.find(req.body, (err, choices) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, choices: choices });
  });
});

router.post('/getThisMiniformChoices', (req, res) => {
  Choice.find(req.body, (err, choices) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, choices: choices });
  });
});

router.post('/updateChoice', (req, res) => {
  Choice.findByIdAndUpdate(
    req.body.choiceId,
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

router.post('/deleteChoice', (req, res) => {
  Choice.findByIdAndDelete(
    req.body.choiceId,
    { $set: req.body },
    (err, doc) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, doc: doc });
    }
  );
});

// answers
router.post('/createMiniformAnswer', (req, res) => {
  const answer = new Answer(req.body);

  answer.save((err, answer) => {
    if (err) return res.json({ success: false, err: err });
    return res.status(200).json({ success: true, answer: answer });
  });
});

router.post('/updateMiniformAnswer', (req, res) => {
  Answer.findOneAndUpdate(
    req.body.filters,
    { $set: req.body.setValues },
    { new: true },
    (err, answer) => {
      if (err) return res.json({ success: false, err: err });
      return res.status(200).json({ success: true, answer: answer });
    }
  );
});

router.post('/getThisMiniformMyAnswers', (req, res) => {
  Answer.find(req.body, (err, answers) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, answers: answers });
  });
});

router.post('/getSubmittedAnswers', (req, res) => {
  Answer.find(req.body, (err, answers) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, answers: answers });
  });
});

router.post('/getThisMiniformAnswersCount', (req, res) => {
  Answer.count(req.body, (err, miniformsCount) => {
    if (err) return res.json({ success: false, err: err });
    res.status(200).json({ success: true, miniformsCount: miniformsCount });
  });
});

module.exports = router;
