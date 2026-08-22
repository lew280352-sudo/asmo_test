import type { ExamSet, Question } from './types'

// หมายเหตุสำคัญ: โจทย์ในแทร็กนี้ "แต่งขึ้นเอง" ทั้งหมด ไม่ใช่ข้อสอบจริงของ College Board
// เนื่องจาก College Board สงวนลิขสิทธิ์ข้อสอบ Digital SAT อย่างเข้มงวดและห้ามนำไปใช้ในแอป
// test-prep เชิงพาณิชย์หรือเผยแพร่สาธารณะโดยเด็ดขาด (ตรวจสอบแล้วว่าไม่มีช่องทางขอสิทธิ์ใช้งานได้)
// ทีมงานจึงแต่งโจทย์ขึ้นใหม่เองทั้งหมด โดยอิงตาม official skill domain ที่ College Board เผยแพร่
// เป็นข้อมูลสาธารณะ (Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry)
// เพื่อให้ฝึกรูปแบบโจทย์ใกล้เคียงข้อสอบจริงได้โดยไม่ละเมิดลิขสิทธิ์

export const SAT_EXAM_SETS: ExamSet[] = [
  {
    id: 'sat-algebra',
    trackId: 'sat',
    subject: 'Algebra',
    title: 'ชุดที่ 1 · Algebra',
    grade: 'เตรียมสอบ SAT',
    description: 'สมการเชิงเส้น ฟังก์ชันเชิงเส้น อสมการ และระบบสมการ',
    note:
      'โจทย์ในชุดนี้แต่งขึ้นเองทั้งหมด ไม่ใช่ข้อสอบจริงของ College Board เนื่องจาก College Board ห้ามนำข้อสอบ Digital SAT จริงไปใช้ในแอปฝึกสอบสาธารณะ ทีมงานจึงแต่งโจทย์ใหม่โดยอิงตาม official skill domain ของ Digital SAT Math เพื่อให้รูปแบบและระดับความยากใกล้เคียงข้อสอบจริง',
  },
  {
    id: 'sat-advanced',
    trackId: 'sat',
    subject: 'Advanced Math',
    title: 'ชุดที่ 1 · Advanced Math',
    grade: 'เตรียมสอบ SAT',
    description: 'สมการไม่เชิงเส้น ฟังก์ชันกำลังสอง เลขยกกำลัง และพหุนาม',
    note:
      'โจทย์ในชุดนี้แต่งขึ้นเองทั้งหมด ไม่ใช่ข้อสอบจริงของ College Board เนื่องจาก College Board ห้ามนำข้อสอบ Digital SAT จริงไปใช้ในแอปฝึกสอบสาธารณะ ทีมงานจึงแต่งโจทย์ใหม่โดยอิงตาม official skill domain ของ Digital SAT Math เพื่อให้รูปแบบและระดับความยากใกล้เคียงข้อสอบจริง',
  },
  {
    id: 'sat-data',
    trackId: 'sat',
    subject: 'Problem-Solving & Data Analysis',
    title: 'ชุดที่ 1 · Problem-Solving & Data Analysis',
    grade: 'เตรียมสอบ SAT',
    description: 'อัตราส่วน ร้อยละ สถิติเบื้องต้น และความน่าจะเป็น',
    note:
      'โจทย์ในชุดนี้แต่งขึ้นเองทั้งหมด ไม่ใช่ข้อสอบจริงของ College Board เนื่องจาก College Board ห้ามนำข้อสอบ Digital SAT จริงไปใช้ในแอปฝึกสอบสาธารณะ ทีมงานจึงแต่งโจทย์ใหม่โดยอิงตาม official skill domain ของ Digital SAT Math เพื่อให้รูปแบบและระดับความยากใกล้เคียงข้อสอบจริง',
  },
  {
    id: 'sat-geometry',
    trackId: 'sat',
    subject: 'Geometry & Trigonometry',
    title: 'ชุดที่ 1 · Geometry & Trigonometry',
    grade: 'เตรียมสอบ SAT',
    description: 'รูปสามเหลี่ยม วงกลม และอัตราส่วนตรีโกณมิติ (เฉพาะข้อที่ไม่ต้องใช้รูปประกอบ)',
    note:
      'โจทย์ในชุดนี้แต่งขึ้นเองทั้งหมด ไม่ใช่ข้อสอบจริงของ College Board เนื่องจาก College Board ห้ามนำข้อสอบ Digital SAT จริงไปใช้ในแอปฝึกสอบสาธารณะ ทีมงานจึงแต่งโจทย์ใหม่โดยอิงตาม official skill domain ของ Digital SAT Math และคัดเฉพาะข้อที่บรรยายด้วยตัวเลขล้วนไม่ต้องใช้รูปประกอบ เพื่อให้รูปแบบและระดับความยากใกล้เคียงข้อสอบจริง',
  },
]

export const SAT_QUESTIONS: Question[] = [
  // ===== Algebra (ง่าย) =====
  {
    id: 'sat-alg-e1',
    setId: 'sat-algebra',
    difficulty: 'easy',
    topic: 'สมการเชิงเส้น (เอกลักษณ์)',
    questionText: 'The equation 2(x − 4) + 3x = 5x − 8 is true for how many values of x?',
    questionTranslationTh: 'สมการ 2(x − 4) + 3x = 5x − 8 เป็นจริงสำหรับค่า x กี่ค่า',
    choices: ['0', '1', '2', 'Infinitely many'],
    answer: 'Infinitely many',
    explanation:
      'กระจายฝั่งซ้าย: 2(x-4)+3x = 2x-8+3x = 5x-8 ซึ่งเท่ากับฝั่งขวาพอดี (5x-8=5x-8)\nเมื่อทั้งสองฝั่งเท่ากันเสมอไม่ว่า x จะเป็นค่าใด แสดงว่าสมการนี้เป็นเอกลักษณ์ (identity) เป็นจริงสำหรับทุกค่าของ x\nดังนั้นคำตอบคือ "Infinitely many" (มีค่า x ที่สอดคล้องเป็นจำนวนอนันต์)',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear equations)',
  },
  {
    id: 'sat-alg-e2',
    setId: 'sat-algebra',
    difficulty: 'easy',
    topic: 'ฟังก์ชันเชิงเส้น (โจทย์สถานการณ์)',
    questionText:
      'A gym charges a one-time membership fee of $45 plus $20 per month. If C(m) represents the total cost after m months, which equation represents C(m)?',
    questionTranslationTh:
      'ยิมแห่งหนึ่งเก็บค่าสมัครสมาชิกครั้งเดียว 45 ดอลลาร์ บวกค่าบริการเดือนละ 20 ดอลลาร์ ถ้า C(m) แทนค่าใช้จ่ายรวมหลังผ่านไป m เดือน สมการใดแทน C(m) ได้ถูกต้อง',
    choices: ['C(m) = 45m + 20', 'C(m) = 20m + 45', 'C(m) = 65m', 'C(m) = 45 + 20 + m'],
    answer: 'C(m) = 20m + 45',
    explanation:
      'ค่าสมัครสมาชิก 45 ดอลลาร์ เป็นค่าคงที่ที่จ่ายครั้งเดียว (ไม่คูณกับ m)\nค่าบริการรายเดือน 20 ดอลลาร์ ต้องคูณกับจำนวนเดือน m ที่ผ่านไป\nรวมกันได้ C(m) = 20m + 45',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear functions)',
  },
  {
    id: 'sat-alg-e3',
    setId: 'sat-algebra',
    difficulty: 'easy',
    topic: 'ระบบสมการเชิงเส้น',
    questionText: 'If x + y = 10 and x − y = 4, what is the value of x?',
    questionTranslationTh: 'ถ้า x + y = 10 และ x − y = 4 ค่าของ x เท่ากับเท่าใด',
    answer: '7',
    explanation:
      'นำสองสมการมาบวกกัน: (x+y)+(x-y) = 10+4 → 2x = 14 → x = 7\n(ตรวจสอบ: y = 10-7 = 3, และ 7-3=4 ตรงกับสมการที่สองพอดี)',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: systems of linear equations)',
  },

  // ===== Algebra (กลาง) =====
  {
    id: 'sat-alg-m1',
    setId: 'sat-algebra',
    difficulty: 'medium',
    topic: 'อสมการเชิงเส้น (โจทย์สถานการณ์)',
    questionText:
      'Tickets to a concert cost $15 for students and $25 for adults. A group spent no more than $300 buying tickets for 6 adults and some students. What is the maximum number of student tickets the group could have purchased?',
    questionTranslationTh:
      'ตั๋วคอนเสิร์ตราคา 15 ดอลลาร์สำหรับนักเรียน และ 25 ดอลลาร์สำหรับผู้ใหญ่ กลุ่มหนึ่งใช้เงินไม่เกิน 300 ดอลลาร์ ซื้อตั๋วผู้ใหญ่ 6 ใบ และตั๋วนักเรียนอีกจำนวนหนึ่ง จำนวนตั๋วนักเรียนมากที่สุดที่ซื้อได้คือกี่ใบ',
    answer: '10',
    explanation:
      'ค่าตั๋วผู้ใหญ่ 6 ใบ = 6×25 = 150 ดอลลาร์\nเงินที่เหลือสำหรับตั๋วนักเรียน = 300-150 = 150 ดอลลาร์\nให้จำนวนตั๋วนักเรียนคือ s: 15s ≤ 150 → s ≤ 10\nดังนั้นจำนวนตั๋วนักเรียนมากที่สุดที่ซื้อได้คือ 10 ใบ',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear inequalities)',
  },
  {
    id: 'sat-alg-m2',
    setId: 'sat-algebra',
    difficulty: 'medium',
    topic: 'ระบบสมการเชิงเส้น (คำตอบไม่จำกัด)',
    questionText:
      'For what value of k does the system of equations 4x + 6y = 12 and 2x + 3y = k have infinitely many solutions?',
    questionTranslationTh:
      'ค่า k เท่าใดที่ทำให้ระบบสมการ 4x + 6y = 12 และ 2x + 3y = k มีคำตอบเป็นจำนวนอนันต์',
    answer: '6',
    explanation:
      'ระบบจะมีคำตอบเป็นจำนวนอนันต์เมื่อทั้งสองสมการแทนเส้นตรงเส้นเดียวกัน\nนำสมการแรก 4x+6y=12 หารด้วย 2 ตลอด: 2x+3y=6\nเทียบกับสมการที่สอง 2x+3y=k จะเห็นว่าต้อง k=6 สมการทั้งสองจึงเป็นเส้นเดียวกัน',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: systems of linear equations)',
  },
  {
    id: 'sat-alg-m3',
    setId: 'sat-algebra',
    difficulty: 'medium',
    topic: 'ความชันของเส้นตรง',
    questionText: 'A line passes through the points (2, 5) and (6, 13). What is the slope of the line?',
    questionTranslationTh: 'เส้นตรงเส้นหนึ่งผ่านจุด (2, 5) และ (6, 13) เส้นตรงนี้มีความชันเท่าใด',
    answer: '2',
    explanation: 'ความชัน = (y₂-y₁)/(x₂-x₁) = (13-5)/(6-2) = 8/4 = 2',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear functions)',
  },
  {
    id: 'sat-alg-m4',
    setId: 'sat-algebra',
    difficulty: 'medium',
    topic: 'อัตราคงที่ (โจทย์สถานการณ์)',
    questionText:
      'A tank contains 40 liters of water and is being filled at a constant rate of 5 liters per minute. After how many minutes will the tank contain 135 liters?',
    questionTranslationTh:
      'ถังน้ำใบหนึ่งมีน้ำอยู่ 40 ลิตร และกำลังถูกเติมด้วยอัตราคงที่ 5 ลิตรต่อนาที อีกกี่นาทีถังนี้จะมีน้ำ 135 ลิตร',
    answer: '19',
    explanation: 'น้ำที่ต้องเติมเพิ่ม = 135-40 = 95 ลิตร\nเวลาที่ใช้ = 95÷5 = 19 นาที',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear equations)',
  },

  // ===== Algebra (ยาก) =====
  {
    id: 'sat-alg-h1',
    setId: 'sat-algebra',
    difficulty: 'hard',
    topic: 'อสมการค่าสัมบูรณ์',
    questionText: 'If |2x − 7| ≤ 9, what is the least possible value of x?',
    questionTranslationTh: 'ถ้า |2x − 7| ≤ 9 ค่าน้อยที่สุดที่เป็นไปได้ของ x คือเท่าใด',
    answer: '-1',
    explanation:
      '|2x-7|≤9 หมายถึง -9 ≤ 2x-7 ≤ 9\nบวก 7 ทุกส่วน: -2 ≤ 2x ≤ 16\nหารด้วย 2 ทุกส่วน: -1 ≤ x ≤ 8\nค่าน้อยที่สุดที่เป็นไปได้คือ x = -1',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear inequalities)',
  },
  {
    id: 'sat-alg-h2',
    setId: 'sat-algebra',
    difficulty: 'hard',
    topic: 'ระบบสมการเชิงเส้น (นิพจน์ผสม)',
    questionText: 'If 5x + 2y = 19 and 3x + 2y = 13, what is the value of x − y?',
    questionTranslationTh: 'ถ้า 5x + 2y = 19 และ 3x + 2y = 13 ค่าของ x − y เท่ากับเท่าใด',
    answer: '1',
    explanation:
      'นำสมการแรกลบสมการที่สอง: (5x+2y)-(3x+2y) = 19-13 → 2x = 6 → x = 3\nแทนค่า x=3 ในสมการที่สอง: 3(3)+2y=13 → 9+2y=13 → y=2\nดังนั้น x-y = 3-2 = 1',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: systems of linear equations)',
  },
  {
    id: 'sat-alg-h3',
    setId: 'sat-algebra',
    difficulty: 'hard',
    topic: 'อสมการเชิงเส้น (โจทย์สถานการณ์)',
    questionText:
      'A company must ship at least 500 units total between two warehouses, A and B. Warehouse A ships exactly 300 units, and Warehouse B ships y units. Which inequality represents all possible values of y needed to meet the shipping requirement?',
    questionTranslationTh:
      'บริษัทหนึ่งต้องขนส่งสินค้ารวมอย่างน้อย 500 หน่วยจากคลังสองแห่งคือ A และ B คลัง A ขนส่งพอดี 300 หน่วย และคลัง B ขนส่ง y หน่วย อสมการใดแทนค่า y ที่เป็นไปได้ทั้งหมดที่ทำให้ครบตามเงื่อนไข',
    choices: ['y ≥ 200', 'y ≤ 200', 'y ≥ 300', 'y ≤ 300'],
    answer: 'y ≥ 200',
    explanation:
      'ยอดรวมต้องอย่างน้อย 500 หน่วย: 300 + y ≥ 500\nลบ 300 ทั้งสองข้าง: y ≥ 200',
    source: 'โจทย์แต่งเองแนว Digital SAT (Algebra: linear inequalities)',
  },

  // ===== Advanced Math (ง่าย) =====
  {
    id: 'sat-adv-e1',
    setId: 'sat-advanced',
    difficulty: 'easy',
    topic: 'เลขยกกำลัง',
    questionText: 'What is the value of (2³)(2⁵)?',
    questionTranslationTh: 'ค่าของ (2³)(2⁵) เท่ากับเท่าใด',
    answer: '256',
    explanation: 'เมื่อคูณเลขยกกำลังฐานเดียวกัน ให้บวกเลขชี้กำลัง: 2³×2⁵ = 2^(3+5) = 2⁸ = 256',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: exponents)',
  },
  {
    id: 'sat-adv-e2',
    setId: 'sat-advanced',
    difficulty: 'easy',
    topic: 'สมการกำลังสอง (การแยกตัวประกอบ)',
    questionText: 'If x² − 5x + 6 = 0, what are the possible values of x?',
    questionTranslationTh: 'ถ้า x² − 5x + 6 = 0 ค่าที่เป็นไปได้ของ x คือข้อใด',
    choices: ['x = 2 or x = 3', 'x = -2 or x = -3', 'x = 1 or x = 6', 'x = -1 or x = -6'],
    answer: 'x = 2 or x = 3',
    explanation: 'แยกตัวประกอบ: x²-5x+6 = (x-2)(x-3) = 0\nดังนั้น x=2 หรือ x=3',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: nonlinear equations)',
  },
  {
    id: 'sat-adv-e3',
    setId: 'sat-advanced',
    difficulty: 'easy',
    topic: 'ฟังก์ชันไม่เชิงเส้น (การแทนค่า)',
    questionText: 'If g(x) = x² + 3x − 4, what is g(2)?',
    questionTranslationTh: 'ถ้า g(x) = x² + 3x − 4 ค่าของ g(2) เท่ากับเท่าใด',
    answer: '6',
    explanation: 'แทน x=2: g(2) = 2² + 3(2) - 4 = 4+6-4 = 6',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: nonlinear functions)',
  },

  // ===== Advanced Math (กลาง) =====
  {
    id: 'sat-adv-m1',
    setId: 'sat-advanced',
    difficulty: 'medium',
    topic: 'ฟังก์ชันกำลังสอง (จุดยอด)',
    questionText: 'The function f(x) = (x − 3)² + 7 has its minimum value when x equals what?',
    questionTranslationTh: 'ฟังก์ชัน f(x) = (x − 3)² + 7 มีค่าต่ำสุดเมื่อ x เท่ากับเท่าใด',
    answer: '3',
    explanation:
      'ฟังก์ชันอยู่ในรูปจุดยอด (vertex form) f(x)=(x-h)²+k ซึ่งมีจุดยอด (ค่าต่ำสุดเมื่อสัมประสิทธิ์หน้า (x-h)² เป็นบวก) ที่ x=h\nในที่นี้ h=3 ดังนั้นค่าต่ำสุดเกิดเมื่อ x=3',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: nonlinear functions)',
  },
  {
    id: 'sat-adv-m2',
    setId: 'sat-advanced',
    difficulty: 'medium',
    topic: 'การเติบโตแบบเอ็กซ์โพเนนเชียล',
    questionText:
      'A population of bacteria doubles every 3 hours. If the initial population is 200, what is the population after 9 hours?',
    questionTranslationTh:
      'ประชากรแบคทีเรียเพิ่มเป็นสองเท่าทุก 3 ชั่วโมง ถ้าเริ่มต้นมี 200 ตัว หลังผ่านไป 9 ชั่วโมงจะมีแบคทีเรียกี่ตัว',
    answer: '1600',
    explanation: '9 ชั่วโมง = การเพิ่มเป็นสองเท่า 9/3 = 3 รอบ\nประชากร = 200×2³ = 200×8 = 1600 ตัว',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: exponential growth)',
  },
  {
    id: 'sat-adv-m3',
    setId: 'sat-advanced',
    difficulty: 'medium',
    topic: 'สมการกำลังสอง (รากซ้ำ)',
    questionText:
      'If the equation x² − 8x + c = 0 has two equal (repeated) roots, what is the value of c?',
    questionTranslationTh: 'ถ้าสมการ x² − 8x + c = 0 มีรากซ้ำสองราก ค่าของ c เท่ากับเท่าใด',
    answer: '16',
    explanation:
      'สมการมีรากซ้ำเมื่อดิสคริมิแนนต์เท่ากับ 0: b²-4ac=0\nแทนค่า a=1, b=-8: (-8)²-4(1)(c) = 0 → 64-4c=0 → c=16',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: nonlinear equations)',
  },
  {
    id: 'sat-adv-m4',
    setId: 'sat-advanced',
    difficulty: 'medium',
    topic: 'เลขยกกำลังเศษส่วน',
    questionText: 'What is the value of 27^(2/3)?',
    questionTranslationTh: 'ค่าของ 27^(2/3) เท่ากับเท่าใด',
    answer: '9',
    explanation: '27^(2/3) = (27^(1/3))² = 3² = 9 (เพราะรากที่สามของ 27 คือ 3)',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: exponents)',
  },

  // ===== Advanced Math (ยาก) =====
  {
    id: 'sat-adv-h1',
    setId: 'sat-advanced',
    difficulty: 'hard',
    topic: 'สมการกำลังสอง (โจทย์การเคลื่อนที่)',
    questionText:
      'A ball is launched upward from ground level with height (in meters) given by h(t) = −5t² + 20t, where t is time in seconds. At what positive value of t does the ball return to the ground (h(t) = 0)?',
    questionTranslationTh:
      'ลูกบอลถูกยิงขึ้นจากพื้นดิน โดยความสูง (เมตร) หาได้จาก h(t) = −5t² + 20t เมื่อ t คือเวลาเป็นวินาที ที่ค่า t บวกเท่าใดที่ลูกบอลตกกลับถึงพื้น (h(t)=0)',
    answer: '4',
    explanation:
      'ตั้งสมการ h(t)=0: -5t²+20t=0\nแยกตัวประกอบ: -5t(t-4)=0\nได้ t=0 (จุดเริ่มต้น) หรือ t=4 (จุดที่ตกกลับถึงพื้น)\nค่า t บวกที่ไม่ใช่จุดเริ่มต้นคือ t=4',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: nonlinear equations)',
  },
  {
    id: 'sat-adv-h2',
    setId: 'sat-advanced',
    difficulty: 'hard',
    topic: 'ระบบสมการไม่เชิงเส้น (ทฤษฎีบทของเวียตา)',
    questionText: 'What is the sum of all values of x that satisfy the system y = x² − 4 and y = 2x + 1?',
    questionTranslationTh: 'ผลบวกของค่า x ทั้งหมดที่สอดคล้องกับระบบสมการ y = x² − 4 และ y = 2x + 1 เท่ากับเท่าใด',
    answer: '2',
    explanation:
      'แทนสมการที่สองในสมการแรก: x²-4 = 2x+1 → x²-2x-5=0\nไม่จำเป็นต้องแก้หาค่า x จริงๆ เพราะโจทย์ถามแค่ผลบวกของราก\nใช้ทฤษฎีบทของเวียตา: ผลบวกของราก = -b/a = -(-2)/1 = 2',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: systems of nonlinear equations)',
  },
  {
    id: 'sat-adv-h3',
    setId: 'sat-advanced',
    difficulty: 'hard',
    topic: 'พหุนาม (ทฤษฎีบทเศษเหลือ)',
    questionText:
      'When the polynomial P(x) = x³ − 4x² + kx − 6 is divided by (x − 2), the remainder is 10. What is the value of k?',
    questionTranslationTh:
      'เมื่อพหุนาม P(x) = x³ − 4x² + kx − 6 หารด้วย (x − 2) ได้เศษเหลือเท่ากับ 10 ค่าของ k เท่ากับเท่าใด',
    answer: '12',
    explanation:
      'ตามทฤษฎีบทเศษเหลือ (Remainder Theorem): เศษเหลือเมื่อหารด้วย (x-2) เท่ากับ P(2)\nแทน x=2: P(2) = 8-16+2k-6 = 2k-14\nตั้งให้เท่ากับ 10: 2k-14=10 → 2k=24 → k=12',
    source: 'โจทย์แต่งเองแนว Digital SAT (Advanced Math: polynomials)',
  },

  // ===== Problem-Solving & Data Analysis (ง่าย) =====
  {
    id: 'sat-data-e1',
    setId: 'sat-data',
    difficulty: 'easy',
    topic: 'ร้อยละ (ส่วนลด)',
    questionText: 'A shirt originally priced at $40 is on sale for 25% off. What is the sale price?',
    questionTranslationTh: 'เสื้อเชิ้ตราคาเดิม 40 ดอลลาร์ ลดราคา 25% ราคาหลังลดเท่ากับเท่าใด',
    answer: '30',
    explanation: 'ราคาหลังลด = 40×(1-0.25) = 40×0.75 = 30 ดอลลาร์',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: percentages)',
  },
  {
    id: 'sat-data-e2',
    setId: 'sat-data',
    difficulty: 'easy',
    topic: 'อัตราส่วน',
    questionText: 'In a class of 35 students, the ratio of boys to girls is 3:4. How many girls are in the class?',
    questionTranslationTh: 'ห้องเรียนหนึ่งมีนักเรียน 35 คน อัตราส่วนนักเรียนชายต่อหญิงเป็น 3:4 ห้องนี้มีนักเรียนหญิงกี่คน',
    answer: '20',
    explanation:
      'อัตราส่วน 3:4 รวมเป็น 3+4=7 ส่วน\nนักเรียน 35 คน ÷ 7 ส่วน = 5 คนต่อส่วน\nนักเรียนหญิง = 4 ส่วน × 5 = 20 คน',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: ratios)',
  },
  {
    id: 'sat-data-e3',
    setId: 'sat-data',
    difficulty: 'easy',
    topic: 'อัตราเร็วและหน่วย',
    questionText:
      'A car travels at a constant speed of 60 miles per hour. How many miles does it travel in 45 minutes?',
    questionTranslationTh: 'รถยนต์คันหนึ่งวิ่งด้วยความเร็วคงที่ 60 ไมล์ต่อชั่วโมง ใน 45 นาที รถวิ่งได้กี่ไมล์',
    answer: '45',
    explanation: '45 นาที = 45/60 = 0.75 ชั่วโมง\nระยะทาง = 60×0.75 = 45 ไมล์',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: rates and units)',
  },

  // ===== Problem-Solving & Data Analysis (กลาง) =====
  {
    id: 'sat-data-m1',
    setId: 'sat-data',
    difficulty: 'medium',
    topic: 'สถิติ (ค่าเฉลี่ย)',
    questionText: 'The test scores of 5 students are 72, 85, 90, 78, and 95. What is the mean score?',
    questionTranslationTh: 'คะแนนสอบของนักเรียน 5 คนคือ 72, 85, 90, 78 และ 95 ค่าเฉลี่ยของคะแนนเท่ากับเท่าใด',
    answer: '84',
    explanation: 'ผลรวม = 72+85+90+78+95 = 420\nค่าเฉลี่ย = 420÷5 = 84',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: statistics)',
  },
  {
    id: 'sat-data-m2',
    setId: 'sat-data',
    difficulty: 'medium',
    topic: 'สถิติ (มัธยฐาน)',
    questionText:
      'A data set consists of the numbers 4, 7, 9, 12, and x, listed in increasing order. If the median of the data set is 9, which of the following must be true about x?',
    questionTranslationTh:
      'ชุดข้อมูลประกอบด้วย 4, 7, 9, 12 และ x เรียงจากน้อยไปมาก ถ้ามัธยฐานของชุดข้อมูลนี้เท่ากับ 9 ข้อใดต่อไปนี้ต้องเป็นจริงเกี่ยวกับ x',
    choices: ['x ≥ 12', 'x ≤ 12', 'x = 9', 'x < 4'],
    answer: 'x ≥ 12',
    explanation:
      'เนื่องจากข้อมูลเรียงจากน้อยไปมากแล้ว (4,7,9,12,x) และ x อยู่ตำแหน่งสุดท้าย (มากที่สุด) แสดงว่า x ≥ 12 เพื่อให้การเรียงลำดับนี้ถูกต้อง\nเมื่อเรียงถูกต้องแล้ว ตำแหน่งกลาง (ตัวที่ 3 จาก 5 ตัว) คือ 9 พอดี ซึ่งตรงกับมัธยฐานที่กำหนด ไม่ว่า x จะมีค่าเท่าใดก็ตาม ตราบใดที่ x ≥ 12\nดังนั้นเงื่อนไขที่ต้องเป็นจริงคือ x ≥ 12',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: statistics)',
  },
  {
    id: 'sat-data-m3',
    setId: 'sat-data',
    difficulty: 'medium',
    topic: 'ร้อยละ (ราคาขายต่อเนื่อง)',
    questionText:
      'A store buys a jacket wholesale for $60 and sells it at a 40% markup. An employee gets a 10% discount off the retail price. How much does the employee pay for the jacket?',
    questionTranslationTh:
      'ร้านค้าซื้อเสื้อแจ็คเก็ตมาราคาส่ง 60 ดอลลาร์ และขายโดยบวกกำไร 40% พนักงานได้ส่วนลด 10% จากราคาขายปลีก พนักงานต้องจ่ายเท่าใดสำหรับเสื้อแจ็คเก็ตตัวนี้',
    answer: '75.6',
    explanation:
      'ราคาขายปลีก (บวกกำไร 40%) = 60×1.4 = 84 ดอลลาร์\nราคาที่พนักงานจ่าย (ลด 10% จากราคาขายปลีก) = 84×0.9 = 75.6 ดอลลาร์',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: percentages)',
  },
  {
    id: 'sat-data-m4',
    setId: 'sat-data',
    difficulty: 'medium',
    topic: 'ความน่าจะเป็นเบื้องต้น',
    questionText:
      'A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue? (Express as a fraction in lowest terms.)',
    questionTranslationTh:
      'ถุงใบหนึ่งมีลูกแก้วสีแดง 5 ลูก สีน้ำเงิน 3 ลูก และสีเขียว 2 ลูก ถ้าสุ่มหยิบ 1 ลูก ความน่าจะเป็นที่จะไม่ได้สีน้ำเงินเท่ากับเท่าใด (ตอบเป็นเศษส่วนอย่างต่ำ)',
    answer: '7/10',
    explanation:
      'จำนวนลูกแก้วทั้งหมด = 5+3+2 = 10 ลูก\nลูกแก้วที่ไม่ใช่สีน้ำเงิน = 5+2 = 7 ลูก\nความน่าจะเป็น = 7/10 (เป็นเศษส่วนอย่างต่ำแล้ว)',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: probability)',
  },

  // ===== Problem-Solving & Data Analysis (ยาก) =====
  {
    id: 'sat-data-h1',
    setId: 'sat-data',
    difficulty: 'hard',
    topic: 'ค่าเฉลี่ยถ่วงน้ำหนัก',
    questionText:
      "A student's final grade is based on 60% from exams (average 85) and 40% from homework (average 92). What is the student's final grade, rounded to the nearest whole number?",
    questionTranslationTh:
      'เกรดสุดท้ายของนักเรียนคำนวณจาก 60% จากคะแนนสอบ (เฉลี่ย 85) และ 40% จากการบ้าน (เฉลี่ย 92) เกรดสุดท้าย (ปัดเป็นจำนวนเต็ม) เท่ากับเท่าใด',
    answer: '88',
    explanation:
      'เกรดสุดท้าย = 0.6×85 + 0.4×92 = 51 + 36.8 = 87.8\nปัดเป็นจำนวนเต็มที่ใกล้ที่สุด = 88',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: weighted averages)',
  },
  {
    id: 'sat-data-h2',
    setId: 'sat-data',
    difficulty: 'hard',
    topic: 'อัตราการผลิต (โจทย์รวมอัตรา)',
    questionText:
      'Machine A produces 150 units in 5 hours. Machine B produces 210 units in 6 hours. Working together at their individual constant rates, how many units do both machines produce combined in 4 hours?',
    questionTranslationTh:
      'เครื่องจักร A ผลิตสินค้าได้ 150 ชิ้นใน 5 ชั่วโมง เครื่องจักร B ผลิตได้ 210 ชิ้นใน 6 ชั่วโมง ถ้าทำงานพร้อมกันด้วยอัตราคงที่ของแต่ละเครื่อง ทั้งสองเครื่องรวมกันจะผลิตได้กี่ชิ้นใน 4 ชั่วโมง',
    answer: '260',
    explanation:
      'อัตราของเครื่อง A = 150÷5 = 30 ชิ้น/ชั่วโมง\nอัตราของเครื่อง B = 210÷6 = 35 ชิ้น/ชั่วโมง\nอัตรารวม = 30+35 = 65 ชิ้น/ชั่วโมง\nใน 4 ชั่วโมง ผลิตได้ = 65×4 = 260 ชิ้น',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: rates)',
  },
  {
    id: 'sat-data-h3',
    setId: 'sat-data',
    difficulty: 'hard',
    topic: 'ร้อยละต่อเนื่อง',
    questionText:
      "A stock's price increased by 20% in January and then decreased by 15% in February. What is the overall percent change in the stock's price from the start of January to the end of February? (Answer as a number, e.g. -5 for a 5% decrease.)",
    questionTranslationTh:
      'ราคาหุ้นเพิ่มขึ้น 20% ในเดือนมกราคม แล้วลดลง 15% ในเดือนกุมภาพันธ์ การเปลี่ยนแปลงร้อยละโดยรวมตั้งแต่ต้นมกราคมถึงปลายกุมภาพันธ์เท่ากับเท่าใด (ตอบเป็นตัวเลข เช่น -5 หมายถึงลดลง 5%)',
    answer: '2',
    explanation:
      'ให้ราคาเริ่มต้น = 100\nหลังเพิ่ม 20%: 100×1.2 = 120\nหลังลด 15%: 120×0.85 = 102\nเปลี่ยนแปลงโดยรวม = 102-100 = 2 (เพิ่มขึ้น 2%)',
    source: 'โจทย์แต่งเองแนว Digital SAT (Problem-Solving & Data Analysis: percentages)',
  },

  // ===== Geometry & Trigonometry (ง่าย) =====
  {
    id: 'sat-geo-e1',
    setId: 'sat-geometry',
    difficulty: 'easy',
    topic: 'เส้นรอบวงกลม',
    questionText: 'A circle has a radius of 7 cm. What is its circumference, in terms of π?',
    questionTranslationTh: 'วงกลมวงหนึ่งมีรัศมี 7 ซม. เส้นรอบวงมีค่าเท่าใด (ตอบในรูป π)',
    choices: ['7π cm', '14π cm', '49π cm', '28π cm'],
    answer: '14π cm',
    explanation: 'เส้นรอบวง = 2πr = 2×π×7 = 14π ซม.',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: circles)',
  },
  {
    id: 'sat-geo-e2',
    setId: 'sat-geometry',
    difficulty: 'easy',
    topic: 'พื้นที่วงกลม',
    questionText: 'A circle has a diameter of 10 inches. What is its area, in terms of π?',
    questionTranslationTh: 'วงกลมวงหนึ่งมีเส้นผ่านศูนย์กลาง 10 นิ้ว พื้นที่มีค่าเท่าใด (ตอบในรูป π)',
    choices: ['5π in²', '10π in²', '25π in²', '100π in²'],
    answer: '25π in²',
    explanation: 'รัศมี = เส้นผ่านศูนย์กลาง/2 = 10/2 = 5 นิ้ว\nพื้นที่ = πr² = π×5² = 25π ตารางนิ้ว',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: circles)',
  },
  {
    id: 'sat-geo-e3',
    setId: 'sat-geometry',
    difficulty: 'easy',
    topic: 'ผลรวมมุมในสามเหลี่ยม',
    questionText: 'In a triangle, two of the angles measure 50° and 65°. What is the measure of the third angle?',
    questionTranslationTh: 'สามเหลี่ยมรูปหนึ่งมีมุมสองมุมวัดได้ 50° และ 65° มุมที่สามวัดได้เท่าใด',
    answer: '65',
    explanation: 'ผลรวมมุมภายในสามเหลี่ยม = 180°\nมุมที่สาม = 180-50-65 = 65°',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: triangles)',
  },

  // ===== Geometry & Trigonometry (กลาง) =====
  {
    id: 'sat-geo-m1',
    setId: 'sat-geometry',
    difficulty: 'medium',
    topic: 'ทฤษฎีบทพีทาโกรัส',
    questionText: 'A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?',
    questionTranslationTh: 'สามเหลี่ยมมุมฉากรูปหนึ่งมีด้านประกอบมุมฉากยาว 9 และ 12 ด้านตรงข้ามมุมฉากยาวเท่าใด',
    answer: '15',
    explanation: 'ด้านตรงข้ามมุมฉาก = √(9²+12²) = √(81+144) = √225 = 15',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: right triangles)',
  },
  {
    id: 'sat-geo-m2',
    setId: 'sat-geometry',
    difficulty: 'medium',
    topic: 'อัตราส่วนตรีโกณมิติ',
    questionText:
      'In a right triangle, the side opposite angle θ has length 8 and the hypotenuse has length 17. What is sin(θ)? (Express as a fraction.)',
    questionTranslationTh:
      'สามเหลี่ยมมุมฉากรูปหนึ่ง ด้านตรงข้ามมุม θ ยาว 8 และด้านตรงข้ามมุมฉากยาว 17 ค่า sin(θ) เท่ากับเท่าใด (ตอบเป็นเศษส่วน)',
    answer: '8/17',
    explanation: 'sin(θ) = ด้านตรงข้ามมุม/ด้านตรงข้ามมุมฉาก = 8/17',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: right triangle trig)',
  },
  {
    id: 'sat-geo-m3',
    setId: 'sat-geometry',
    difficulty: 'medium',
    topic: 'สามเหลี่ยมคล้าย',
    questionText:
      'Triangle ABC is similar to triangle DEF. If AB = 6, BC = 8, and the corresponding side DE = 15, what is the length of EF?',
    questionTranslationTh:
      'สามเหลี่ยม ABC คล้ายกับสามเหลี่ยม DEF ถ้า AB = 6, BC = 8 และด้านที่สมนัยกัน DE = 15 ด้าน EF ยาวเท่าใด',
    answer: '20',
    explanation:
      'อัตราส่วนขนาด = DE/AB = 15/6 = 2.5\nEF สมนัยกับ BC ดังนั้น EF = BC×2.5 = 8×2.5 = 20',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: similar triangles)',
  },
  {
    id: 'sat-geo-m4',
    setId: 'sat-geometry',
    difficulty: 'medium',
    topic: 'ความยาวส่วนโค้ง',
    questionText: 'A circle has a radius of 12 cm. What is the length of an arc that corresponds to a central angle of 60°?',
    questionTranslationTh: 'วงกลมวงหนึ่งมีรัศมี 12 ซม. ส่วนโค้งที่รองรับมุมที่จุดศูนย์กลาง 60° มีความยาวเท่าใด',
    choices: ['2π cm', '4π cm', '6π cm', '8π cm'],
    answer: '4π cm',
    explanation:
      'ความยาวส่วนโค้ง = (มุมที่จุดศูนย์กลาง/360°)×เส้นรอบวง = (60/360)×2π×12 = (1/6)×24π = 4π ซม.',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: circles)',
  },

  // ===== Geometry & Trigonometry (ยาก) =====
  {
    id: 'sat-geo-h1',
    setId: 'sat-geometry',
    difficulty: 'hard',
    topic: 'มุมประกอบ (Complementary Angles)',
    questionText: 'If sin(x°) = cos(50°), and 0 < x < 90, what is the value of x?',
    questionTranslationTh: 'ถ้า sin(x°) = cos(50°) และ 0 < x < 90 ค่าของ x เท่ากับเท่าใด',
    answer: '40',
    explanation:
      'ใช้เอกลักษณ์มุมประกอบ (co-function identity): cos(50°) = sin(90°-50°) = sin(40°)\nดังนั้น sin(x°) = sin(40°)\nเมื่อ 0<x<90 ฟังก์ชัน sin เป็นฟังก์ชันหนึ่งต่อหนึ่งในช่วงนี้ จึงได้ x=40',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: trigonometric identities)',
  },
  {
    id: 'sat-geo-h2',
    setId: 'sat-geometry',
    difficulty: 'hard',
    topic: 'อัตราส่วนตรีโกณมิติ (หาด้านตรงข้ามมุมฉาก)',
    questionText:
      'In a right triangle, angle A is acute and cos(A) = 5/13. If the side adjacent to angle A has length 15, what is the length of the hypotenuse?',
    questionTranslationTh:
      'สามเหลี่ยมมุมฉากรูปหนึ่ง มุม A เป็นมุมแหลม และ cos(A) = 5/13 ถ้าด้านประชิดมุม A ยาว 15 ด้านตรงข้ามมุมฉากยาวเท่าใด',
    answer: '39',
    explanation:
      'cos(A) = ด้านประชิด/ด้านตรงข้ามมุมฉาก = 5/13\nแทนด้านประชิด=15: 15/ด้านตรงข้ามมุมฉาก = 5/13\nด้านตรงข้ามมุมฉาก = 15×13/5 = 39',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: right triangle trig)',
  },
  {
    id: 'sat-geo-h3',
    setId: 'sat-geometry',
    difficulty: 'hard',
    topic: 'พื้นที่สามเหลี่ยม (สูตร SAS ด้วยตรีโกณมิติ)',
    questionText:
      'A triangle has two sides of length 10 and 14, with an included angle of 30° between them. What is the area of the triangle?',
    questionTranslationTh:
      'สามเหลี่ยมรูปหนึ่งมีด้านสองด้านยาว 10 และ 14 โดยมีมุมระหว่างสองด้านนี้เท่ากับ 30° พื้นที่ของสามเหลี่ยมเท่ากับเท่าใด',
    answer: '35',
    explanation:
      'พื้นที่สามเหลี่ยมจากสองด้านและมุมระหว่างด้าน (SAS) = (1/2)×a×b×sin(มุม)\n= (1/2)×10×14×sin(30°) = (1/2)×140×0.5 = 35',
    source: 'โจทย์แต่งเองแนว Digital SAT (Geometry & Trigonometry: triangle area)',
  },
]
