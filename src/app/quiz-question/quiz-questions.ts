export const Questions = [{
  id: 1,
  question: 'q1q',
  type: 'single',
  options: ['q1o1', 'q1o2'],
  answers: [true, false],
  error_phrase: 'q1e'
}, {
  id: 2,
  question: 'q2q',
  type: 'single',
  options: ['q2o1', 'q2o2', 'q2o3'],
  answers: [false, true, false],
  error_phrase: 'q2e'
}, {
  id: 3,
  question: 'q3q',
  type: 'corresponding',
  options: ['q3o1', 'q3o2', 'q3o3', 'q3o4'],
  answers: ['q3a1', 'q3a2', 'q3a3', 'q3a4'],
  matches: { 1: '4', 2: '2', 3: '1', 4: '3' },
  error_phrase: 'q3e'
}, {
  id: 4,
  question: 'q4q',
  type: 'single',
  options: ['q4o1', 'q4o2', 'q4o3'],
  answers: [false, false, true],
  error_phrase: 'q4e'
}, {
  id: 5,
  question: 'q5q',
  type: 'corresponding',
  options: ['q5o1', 'q5o2'],
  answers: ['q5a1', 'q5a2'],
  matches: { 1: '2', 2: '1' },
  error_phrase: 'q5e'
}, {
  id: 6,
  question: 'q6q',
  type: 'multiply',
  options: ['q6o1', 'q6o2', 'q6o3', 'q6o4'],
  answers: [false, false, true, true],
  error_phrase: 'q6e'
}, {
  id: 7,
  question: 'q7q',
  type: 'single',
  options: ['q7o1', 'q7o2', 'q7o3', 'q7o4'],
  answers: [false, true, false, false],
  error_phrase: 'q7e'
}, {
  id: 8,
  question: 'q8q',
  type: 'single',
  options: ['q8o1', 'q8o2', 'q8o3', 'q8o4'],
  answers: [true, false, false, false],
  error_phrase: 'q8e'
}, {
  id: 9,
  question: 'q9q',
  type: 'multiply',
  options: ['q9o1', 'q9o2', 'q9o3', 'q9o4'],
  answers: [true, false, true, false],
  error_phrase: 'q9e'
}, {
  id: 10,
  question: 'q10q',
  type: 'single',
  options: ['q10o1', 'q10o2', 'q10o3'],
  answers: [false, true, false],
  error_phrase: 'q10e'
}, {
  id: 11,
  question: 'q11q',
  type: 'single',
  options: ['q11o1', 'q11o2', 'q11o3'],
  answers: [true, false, false],
  error_phrase: 'q11e'
}, {
  id: 12,
  question: 'q12q',
  type: 'single',
  options: ['q12o1', 'q12o2', 'q12o3'],
  answers: [false, true, false],
  error_phrase: 'q12e'
}, {
  id: 13,
  question: 'q13q',
  type: 'corresponding',
  options: ['q13o1', 'q13o2', 'q13o3', 'q13o4'],
  answers: ['q13a1', 'q13a2', 'q13a3', 'q13a4'],
  matches: { 1: '1', 2: '2', 3: '3', 4: '4' },
  error_phrase: 'q13e'
}, {
  id: 15,
  question: 'q15q',
  type: 'corresponding',
  options: ['q15o1', 'q15o2', 'q15o3', 'q15o4'],
  answers: ['q15a1', 'q15a2', 'q15a3', 'q15a4'],
  matches: { 1: '3', 2: '1', 3: '2', 4: '4' },
  error_phrase: 'q15e'
}, {
  id: 16,
  question: 'q16q',
  type: 'corresponding',
  options: ['q16o1', 'q16o2', 'q16o3', 'q16o4'],
  answers: ['q16a1', 'q16a2', 'q16a3', 'q16a4'],
  matches: { 1: '2', 2: '1', 3: '4', 4: '3' },
  error_phrase: 'q16e'
}, {
  id: 23,
  question: 'q23q',
  type: 'corresponding',
  options: ['q23o1', 'q23o2', 'q23o3', 'q23o4'],
  answers: ['q23a1', 'q23a2', 'q23a3', 'q23a4'],
  matches: { 1: '2', 2: '1', 3: '4', 4: '3' },
  error_phrase: 'q23e'
}, {
  id: 24,
  question: 'q24q',
  type: 'single',
  options: [''],
  answers: [true],
  error_phrase: 'q24e'
}, {
  id: 25,
  question: 'q25q',
  type: 'single',
  options: ['q25o1', 'q25o2', 'q25o3', 'q25o4', 'q25o5', 'q25o6'],
  answers: [false, false, false, false, false, true],
  error_phrase: 'q25e'
}];
