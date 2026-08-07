import type { ExamSet, Question } from './types'

export const EXAM_SETS: ExamSet[] = [
  {
    id: 's1',
    title: 'ชุดที่ 1',
    grade: 'ม.4-ม.6',
    description: 'พีชคณิต เรขาคณิต ความน่าจะเป็น และทฤษฎีจำนวนพื้นฐาน',
  },
  {
    id: 's2',
    title: 'ชุดที่ 2',
    grade: 'ม.4-ม.6',
    description: 'ฟังก์ชัน ลำดับ การจัดหมู่ และโจทย์ประยุกต์',
  },
  {
    id: 's3',
    title: 'ชุดที่ 3 · โจทย์จากข้อสอบจริง',
    grade: 'ม.4-ม.6',
    description: 'คัดจากข้อสอบ ASMO / Road to ASMOPSS ระดับมัธยมปลายจริงย้อนหลัง (2019-2023)',
    note:
      'โจทย์ในชุดนี้คัดมาจากข้อสอบจริงของ ASMO และ Road to ASMOPSS (Math Secondary) ปี 2019-2023 แต่ไม่มีเฉลยทางการเผยแพร่สำหรับระดับมัธยมปลาย ทีมงานจึงแก้และตรวจทานคำตอบเองอย่างละเอียดก่อนนำมาใช้ หากพบข้อสงสัยแนะนำให้ลองแก้ด้วยตนเองเทียบดูอีกครั้ง',
  },
]

// โจทย์เป็นภาษาอังกฤษต้นฉบับ (ไม่แปล) เพื่อฝึกภาษาไปพร้อมกัน มีคำแปลไทยของโจทย์แถมให้ ส่วนคำอธิบายวิธีทำเป็นภาษาไทยแบบละเอียดทีละขั้นตอน
export const QUESTIONS: Question[] = [
  // ===== ชุดที่ 1 : ง่าย =====
  {
    id: 's1-e1',
    setId: 's1',
    difficulty: 'easy',
    topic: 'พีชคณิต',
    questionText: 'If x + 5 = 12, what is the value of 2x - 3?',
    questionTranslationTh: 'ถ้า x + 5 = 12 แล้ว 2x - 3 มีค่าเท่าใด?',
    choices: ['9', '11', '14', '17'],
    answer: '11',
    explanation:
      'ขั้นที่ 1: แก้สมการ x + 5 = 12 โดยลบ 5 ออกทั้งสองข้าง จะได้ x = 7\nขั้นที่ 2: แทนค่า x = 7 ลงในนิพจน์ 2x - 3 = 2(7) - 3 = 14 - 3 = 11\nดังนั้นคำตอบคือ 11',
  },
  {
    id: 's1-e2',
    setId: 's1',
    difficulty: 'easy',
    topic: 'ลำดับและอนุกรม',
    questionText: 'What is the sum of the even numbers from 2 to 20?',
    questionTranslationTh: 'ผลบวกของจำนวนคู่ตั้งแต่ 2 ถึง 20 มีค่าเท่าใด?',
    choices: ['100', '105', '110', '120'],
    answer: '110',
    explanation:
      'จำนวนคู่ตั้งแต่ 2 ถึง 20 คือ 2, 4, 6, ..., 20 มีทั้งหมด 10 จำนวน\nดึงตัวร่วม 2 ออกมาได้เป็น 2×(1+2+3+...+10)\nผลบวก 1 ถึง 10 ใช้สูตร n(n+1)/2 = 10×11/2 = 55\nดังนั้นผลบวกทั้งหมด = 2×55 = 110',
  },
  {
    id: 's1-e3',
    setId: 's1',
    difficulty: 'easy',
    topic: 'เรขาคณิต',
    questionText: 'A right triangle has legs of length 6 and 8 units. What is the length of the hypotenuse?',
    questionTranslationTh: 'สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 6 และ 8 หน่วย ด้านตรงข้ามมุมฉากยาวเท่าใด?',
    choices: ['10', '12', '14', '16'],
    answer: '10',
    explanation:
      'ใช้ทฤษฎีบทพีทาโกรัส: (ด้านตรงข้ามมุมฉาก)² = (ด้านประกอบมุมฉากที่ 1)² + (ด้านประกอบมุมฉากที่ 2)²\nแทนค่า = 6² + 8² = 36 + 64 = 100\nถอดรากที่สอง √100 = 10\nดังนั้นด้านตรงข้ามมุมฉากยาว 10 หน่วย (เป็นสามเหลี่ยมชุด 6-8-10 ซึ่งเป็นพหุคูณของชุด 3-4-5)',
  },
  {
    id: 's1-e4',
    setId: 's1',
    difficulty: 'easy',
    topic: 'อัตราส่วน',
    questionText: 'If a : b = 3 : 4 and b : c = 2 : 5, what is a : c?',
    questionTranslationTh: 'ถ้า a : b = 3 : 4 และ b : c = 2 : 5 แล้ว a : c เท่ากับข้อใด?',
    choices: ['3:5', '3:10', '3:8', '3:7'],
    answer: '3:10',
    explanation:
      'ต้องทำให้ค่า b ในอัตราส่วนทั้งสองเท่ากันก่อนจึงจะเทียบกันได้\nจาก a:b = 3:4 และ b:c = 2:5 จะเห็นว่า b เป็น 4 ในอัตราส่วนแรก แต่เป็น 2 ในอัตราส่วนที่สอง\nคูณอัตราส่วนที่สองด้วย 2 ทั้งสองฝั่ง: b:c = 4:10 ตอนนี้ b เท่ากับ 4 เหมือนกันทั้งคู่แล้ว\nนำมารวมกันเป็น a:b:c = 3:4:10\nดังนั้น a:c = 3:10',
  },
  {
    id: 's1-e5',
    setId: 's1',
    difficulty: 'easy',
    topic: 'ทฤษฎีจำนวน',
    questionText: 'What is the largest prime number less than 30?',
    questionTranslationTh: 'จำนวนเฉพาะที่มากที่สุดที่น้อยกว่า 30 คือข้อใด?',
    choices: ['23', '27', '29', '28'],
    answer: '29',
    explanation:
      'ตรวจตัวเลือกจากมากไปน้อย: 28 เป็นจำนวนคู่ หารด้วย 2 ลงตัว จึงไม่ใช่จำนวนเฉพาะ\n27 = 3×9 หารด้วย 3 ลงตัว จึงไม่ใช่จำนวนเฉพาะเช่นกัน\n29 ตรวจสอบแล้วไม่มีจำนวนใดตั้งแต่ 2 ถึง √29 (≈5.4) หารลงตัวเลย จึงเป็นจำนวนเฉพาะ\nดังนั้น 29 คือจำนวนเฉพาะที่มากที่สุดซึ่งน้อยกว่า 30',
  },

  // ===== ชุดที่ 1 : กลาง =====
  {
    id: 's1-m1',
    setId: 's1',
    difficulty: 'medium',
    topic: 'พีชคณิต',
    questionText: 'If x² - 5x + 6 = 0, what is the sum of its two roots?',
    questionTranslationTh: 'ถ้า x² - 5x + 6 = 0 ผลบวกของคำตอบทั้งสองเท่ากับเท่าใด?',
    choices: ['1', '5', '6', '-5'],
    answer: '5',
    explanation:
      'แยกตัวประกอบ x² - 5x + 6 = 0 ได้เป็น (x-2)(x-3) = 0 ดังนั้นคำตอบคือ x=2 หรือ x=3\nผลบวกของคำตอบ = 2+3 = 5\n(หรือใช้สูตรลัด: ผลบวกของคำตอบสมการ ax²+bx+c=0 คือ -b/a = -(-5)/1 = 5 โดยไม่ต้องแยกตัวประกอบก็ได้)',
  },
  {
    id: 's1-m2',
    setId: 's1',
    difficulty: 'medium',
    topic: 'ความน่าจะเป็น',
    questionText:
      'A box contains 4 red balls, 5 blue balls, and 3 green balls. One ball is drawn at random. What is the probability of drawing a blue or green ball?',
    questionTranslationTh:
      'กล่องใบหนึ่งมีลูกบอลสีแดง 4 ลูก สีน้ำเงิน 5 ลูก และสีเขียว 3 ลูก สุ่มหยิบ 1 ลูก ความน่าจะเป็นที่จะได้ลูกบอลสีน้ำเงินหรือสีเขียวเท่ากับเท่าใด?',
    choices: ['1/3', '1/2', '2/3', '3/4'],
    answer: '2/3',
    explanation:
      'จำนวนลูกบอลทั้งหมด = 4+5+3 = 12 ลูก\nจำนวนลูกบอลที่เป็นสีน้ำเงินหรือเขียว = 5+3 = 8 ลูก\nความน่าจะเป็น = จำนวนที่ต้องการ ÷ จำนวนทั้งหมด = 8/12 = 2/3',
  },
  {
    id: 's1-m3',
    setId: 's1',
    difficulty: 'medium',
    topic: 'เรขาคณิต',
    questionText: 'The sum of the interior angles of a certain regular polygon is 1440°. How many sides does it have?',
    questionTranslationTh: 'ผลรวมมุมภายในของรูปหลายเหลี่ยมด้านเท่ามุมเท่าชนิดหนึ่งเท่ากับ 1440 องศา รูปนี้มีกี่ด้าน?',
    choices: ['8', '9', '10', '12'],
    answer: '10',
    explanation:
      'สูตรผลรวมมุมภายในของรูป n เหลี่ยม คือ (n-2)×180 องศา\nแทนค่าที่โจทย์ให้: 1440 = (n-2)×180\nหารทั้งสองข้างด้วย 180: n-2 = 8\nดังนั้น n = 10 รูปนี้มี 10 ด้าน',
  },
  {
    id: 's1-m4',
    setId: 's1',
    difficulty: 'medium',
    topic: 'ลอการิทึม',
    questionText: 'If log₂(x) = 5, what is the value of x?',
    questionTranslationTh: 'ถ้า log₂(x) = 5 แล้ว x มีค่าเท่าใด?',
    choices: ['10', '16', '25', '32'],
    answer: '32',
    explanation:
      'log₂(x) = 5 หมายความว่า "2 ยกกำลังเท่าไรจึงจะได้ x" โดยคำตอบของกำลังนั้นคือ 5\nดังนั้น x = 2⁵ = 2×2×2×2×2 = 32',
  },
  {
    id: 's1-m5',
    setId: 's1',
    difficulty: 'medium',
    topic: 'อัตราเร็ว',
    questionText: 'A car travels at an average speed of 60 km/h for 2 hours 30 minutes. How far does it travel?',
    questionTranslationTh: 'รถยนต์คันหนึ่งวิ่งด้วยความเร็วเฉลี่ย 60 กม./ชม. เป็นเวลา 2 ชั่วโมง 30 นาที จะวิ่งได้ระยะทางกี่กิโลเมตร?',
    choices: ['120', '150', '180', '200'],
    answer: '150',
    explanation:
      'แปลงเวลา 2 ชั่วโมง 30 นาที เป็นชั่วโมงทั้งหมด = 2 + 30/60 = 2.5 ชั่วโมง\nใช้สูตร ระยะทาง = อัตราเร็ว × เวลา = 60 × 2.5 = 150 กิโลเมตร',
  },

  // ===== ชุดที่ 1 : ยาก =====
  {
    id: 's1-h1',
    setId: 's1',
    difficulty: 'hard',
    topic: 'พีชคณิต',
    questionText: 'Find the sum of all solutions of the equation |2x - 3| = 7.',
    questionTranslationTh: 'จงหาผลบวกของคำตอบทั้งหมดของสมการ |2x - 3| = 7',
    choices: ['3', '5', '7', '-2'],
    answer: '3',
    explanation:
      'ค่าสัมบูรณ์ |2x-3| = 7 หมายความว่านิพจน์ข้างในมีค่าเป็น 7 หรือ -7 ก็ได้ จึงแยกเป็น 2 กรณี\nกรณีที่ 1: 2x-3=7 → 2x=10 → x=5\nกรณีที่ 2: 2x-3=-7 → 2x=-4 → x=-2\nผลบวกของคำตอบทั้งสอง = 5+(-2) = 3',
  },
  {
    id: 's1-h2',
    setId: 's1',
    difficulty: 'hard',
    topic: 'พีชคณิต',
    questionText: 'Let a, b be positive integers with a + b = 20. Find the maximum possible value of a × b.',
    questionTranslationTh: 'กำหนดให้ a, b เป็นจำนวนเต็มบวกที่ a + b = 20 จงหาค่ามากที่สุดที่เป็นไปได้ของ a × b',
    choices: ['91', '96', '99', '100'],
    answer: '100',
    explanation:
      'เมื่อผลบวกของสองจำนวนคงที่ ผลคูณจะมากที่สุดเมื่อสองจำนวนนั้นใกล้เคียงกันมากที่สุด (เท่ากันพอดีถ้าเป็นไปได้)\nเนื่องจาก a+b=20 ค่าที่ใกล้เคียงกันที่สุดคือ a=b=10\nผลคูณสูงสุด = 10×10 = 100\nลองเทียบดู: 9×11=99, 8×12=96 ซึ่งน้อยกว่า 100 ทั้งคู่ ยืนยันว่า 10×10 ให้ค่ามากที่สุดจริง',
  },
  {
    id: 's1-h3',
    setId: 's1',
    difficulty: 'hard',
    topic: 'ความน่าจะเป็น',
    questionText: 'A fair coin is tossed 4 times. What is the probability of getting at least 3 heads?',
    questionTranslationTh: 'ในการโยนเหรียญที่เที่ยงตรง 4 ครั้ง ความน่าจะเป็นที่จะได้หัวอย่างน้อย 3 ครั้งเท่ากับเท่าใด?',
    choices: ['1/4', '5/16', '3/8', '1/2'],
    answer: '5/16',
    explanation:
      'การโยนเหรียญ 4 ครั้ง มีผลลัพธ์ทั้งหมด 2⁴ = 16 แบบ\n"อย่างน้อย 3 หัว" หมายถึงได้หัวพอดี 3 ครั้ง หรือได้หัวทั้ง 4 ครั้ง\nจำนวนวิธีที่ได้หัวพอดี 3 ครั้ง = C(4,3) = 4 วิธี\nจำนวนวิธีที่ได้หัวทั้ง 4 ครั้ง = C(4,4) = 1 วิธี\nรวมวิธีที่ต้องการ = 4+1 = 5 วิธี จากทั้งหมด 16 วิธี\nความน่าจะเป็น = 5/16',
  },
  {
    id: 's1-h4',
    setId: 's1',
    difficulty: 'hard',
    topic: 'เรขาคณิต',
    questionText: 'Triangle ABC has sides AB = 13, BC = 14, CA = 15 units. Find the area of the triangle.',
    questionTranslationTh: 'สามเหลี่ยม ABC มีด้าน AB = 13, BC = 14, CA = 15 หน่วย จงหาพื้นที่ของสามเหลี่ยมนี้',
    choices: ['81', '84', '90', '96'],
    answer: '84',
    explanation:
      'ใช้สูตรของเฮรอน (Heron\'s formula) สำหรับหาพื้นที่สามเหลี่ยมเมื่อรู้ความยาวด้านทั้งสาม\nขั้นแรกหาครึ่งเส้นรอบรูป s = (13+14+15)/2 = 21\nพื้นที่ = √[s(s-a)(s-b)(s-c)] = √[21×(21-13)×(21-14)×(21-15)] = √[21×8×7×6] = √7056 = 84\nดังนั้นพื้นที่สามเหลี่ยมเท่ากับ 84 ตารางหน่วย',
  },
  {
    id: 's1-h5',
    setId: 's1',
    difficulty: 'hard',
    topic: 'ทฤษฎีจำนวน',
    questionText: 'What is the smallest positive integer n such that n! is divisible by 10000?',
    questionTranslationTh: 'จำนวนเต็มบวก n ที่น้อยที่สุดที่ทำให้ n! หารด้วย 10000 ลงตัว คือข้อใด?',
    choices: ['15', '18', '20', '25'],
    answer: '20',
    explanation:
      '10000 = 10⁴ = (2×5)⁴ = 2⁴×5⁴ ดังนั้น n! ต้องมีตัวประกอบ 2 อย่างน้อย 4 ตัว และตัวประกอบ 5 อย่างน้อย 4 ตัว\nโดยทั่วไปจำนวนตัวประกอบ 5 ใน n! จะน้อยกว่าจำนวนตัวประกอบ 2 มาก จึงเป็นเงื่อนไขที่ต้องพิจารณาก่อน\nนับตัวประกอบ 5 ที่ n=20: มาจาก 5, 10, 15, 20 (ตัวละหนึ่งตัวประกอบ 5) รวมเป็น 4 ตัวพอดี\nที่ n=19 หรือน้อยกว่า จะมีตัวประกอบ 5 เพียง 3 ตัว (จาก 5,10,15) ไม่พอ\nส่วนตัวประกอบ 2 ใน 20! มีมากกว่า 4 ตัวอยู่แล้วแน่นอน จึงไม่ใช่เงื่อนไขที่จำกัด\nดังนั้นค่า n ที่น้อยที่สุดคือ 20',
  },

  // ===== ชุดที่ 2 : ง่าย =====
  {
    id: 's2-e1',
    setId: 's2',
    difficulty: 'easy',
    topic: 'พีชคณิต',
    questionText: 'If 3x - 7 = 14, what is the value of x?',
    questionTranslationTh: 'ถ้า 3x - 7 = 14 แล้ว x มีค่าเท่าใด?',
    choices: ['5', '6', '7', '8'],
    answer: '7',
    explanation: 'บวก 7 เข้าทั้งสองข้าง: 3x = 14+7 = 21\nหารทั้งสองข้างด้วย 3: x = 21/3 = 7',
  },
  {
    id: 's2-e2',
    setId: 's2',
    difficulty: 'easy',
    topic: 'ร้อยละ',
    questionText: 'A class has 40 students, 24 of whom are boys and the rest are girls. What percentage of the class are girls?',
    questionTranslationTh: 'นักเรียนกลุ่มหนึ่งมี 40 คน เป็นชาย 24 คน ที่เหลือเป็นหญิง คิดเป็นร้อยละเท่าใดของนักเรียนหญิง?',
    choices: ['30%', '35%', '40%', '45%'],
    answer: '40%',
    explanation:
      'จำนวนนักเรียนหญิง = จำนวนทั้งหมด - จำนวนชาย = 40-24 = 16 คน\nคิดเป็นร้อยละ = (16/40)×100 = 40%',
  },
  {
    id: 's2-e3',
    setId: 's2',
    difficulty: 'easy',
    topic: 'เลขยกกำลัง',
    questionText: 'What is the value of 2³ + 3²?',
    questionTranslationTh: 'ค่าของ 2³ + 3² เท่ากับเท่าใด?',
    choices: ['15', '17', '19', '21'],
    answer: '17',
    explanation: 'คำนวณแต่ละพจน์ก่อน: 2³ = 2×2×2 = 8 และ 3² = 3×3 = 9\nนำมาบวกกัน: 8+9 = 17',
  },
  {
    id: 's2-e4',
    setId: 's2',
    difficulty: 'easy',
    topic: 'เรขาคณิต',
    questionText: 'A rectangle has length 12 cm and width 5 cm. What is the length of its diagonal?',
    questionTranslationTh: 'สี่เหลี่ยมผืนผ้ามีความยาว 12 ซม. และกว้าง 5 ซม. เส้นทแยงมุมยาวเท่าใด?',
    choices: ['11', '12', '13', '14'],
    answer: '13',
    explanation:
      'เส้นทแยงมุมของสี่เหลี่ยมผืนผ้าคำนวณด้วยทฤษฎีบทพีทาโกรัส เหมือนหาด้านตรงข้ามมุมฉากของสามเหลี่ยมมุมฉาก\n(เส้นทแยงมุม)² = ความยาว² + ความกว้าง² = 12²+5² = 144+25 = 169\nเส้นทแยงมุม = √169 = 13 ซม. (เป็นสามเหลี่ยมชุด 5-12-13)',
  },
  {
    id: 's2-e5',
    setId: 's2',
    difficulty: 'easy',
    topic: 'สถิติ',
    questionText: 'What is the arithmetic mean of 4, 8, 15, 16, 17?',
    questionTranslationTh: 'ค่าเฉลี่ยเลขคณิตของ 4, 8, 15, 16, 17 เท่ากับเท่าใด?',
    choices: ['10', '11', '12', '13'],
    answer: '12',
    explanation:
      'ค่าเฉลี่ยเลขคณิต = ผลบวกของข้อมูลทั้งหมด ÷ จำนวนข้อมูล\nผลบวก = 4+8+15+16+17 = 60 มีข้อมูล 5 ตัว\nค่าเฉลี่ย = 60/5 = 12',
  },

  // ===== ชุดที่ 2 : กลาง =====
  {
    id: 's2-m1',
    setId: 's2',
    difficulty: 'medium',
    topic: 'ฟังก์ชัน',
    questionText: 'If f(x) = 2x² - 3x + 1, what is f(-2)?',
    questionTranslationTh: 'ถ้า f(x) = 2x² - 3x + 1 แล้ว f(-2) มีค่าเท่าใด?',
    choices: ['11', '13', '15', '17'],
    answer: '15',
    explanation:
      'แทนค่า x=-2 ลงในฟังก์ชัน: f(-2) = 2(-2)² - 3(-2) + 1 = 2(4) - (-6) + 1 = 8+6+1 = 15\n(ระวังเครื่องหมาย: (-2)²=4 ไม่ใช่ -4 และ -3×(-2) = +6)',
  },
  {
    id: 's2-m2',
    setId: 's2',
    difficulty: 'medium',
    topic: 'ลำดับเลขคณิต',
    questionText: 'An arithmetic sequence has first term 5 and common difference 3. What is its 20th term?',
    questionTranslationTh: 'ลำดับเลขคณิตมีพจน์แรกเท่ากับ 5 และผลต่างร่วมเท่ากับ 3 พจน์ที่ 20 มีค่าเท่าใด?',
    choices: ['58', '60', '62', '65'],
    answer: '62',
    explanation:
      'สูตรพจน์ที่ n ของลำดับเลขคณิต คือ aₙ = a₁ + (n-1)×d\nแทนค่า a₁=5, d=3, n=20: a₂₀ = 5 + 19×3 = 5+57 = 62',
  },
  {
    id: 's2-m3',
    setId: 's2',
    difficulty: 'medium',
    topic: 'ความน่าจะเป็น',
    questionText:
      'A box contains ping-pong balls numbered 1 to 10, one of each. One ball is drawn at random. What is the probability of drawing a number divisible by 3?',
    questionTranslationTh:
      'กล่องใบหนึ่งมีลูกปิงปองกำกับเลข 1-10 อย่างละ 1 ลูก สุ่มหยิบ 1 ลูก ความน่าจะเป็นที่ได้เลขที่หารด้วย 3 ลงตัวเท่ากับเท่าใด?',
    choices: ['1/5', '3/10', '2/5', '1/2'],
    answer: '3/10',
    explanation: 'เลขตั้งแต่ 1 ถึง 10 ที่หารด้วย 3 ลงตัว ได้แก่ 3, 6, 9 รวม 3 ตัว จากทั้งหมด 10 ตัว\nความน่าจะเป็น = 3/10',
  },
  {
    id: 's2-m4',
    setId: 's2',
    difficulty: 'medium',
    topic: 'เรขาคณิต',
    questionText: 'What is the measure of each interior angle of a regular hexagon?',
    questionTranslationTh: 'มุมภายในของรูปหกเหลี่ยมด้านเท่ามุมเท่ามีค่ามุมละกี่องศา?',
    choices: ['100', '108', '120', '135'],
    answer: '120',
    explanation:
      'สูตรมุมภายในแต่ละมุมของรูปหลายเหลี่ยมด้านเท่ามุมเท่า n เหลี่ยม คือ (n-2)×180/n\nหกเหลี่ยมมี n=6: (6-2)×180/6 = 4×180/6 = 720/6 = 120 องศา',
  },
  {
    id: 's2-m5',
    setId: 's2',
    difficulty: 'medium',
    topic: 'เลขยกกำลัง',
    questionText: 'If 2^x = 32, what is the value of x?',
    questionTranslationTh: 'ถ้า 2^x = 32 แล้ว x มีค่าเท่าใด?',
    choices: ['4', '5', '6', '16'],
    answer: '5',
    explanation: 'เขียน 32 ในรูปเลขยกกำลังฐาน 2: 32 = 2×2×2×2×2 = 2⁵\nเมื่อฐานเท่ากัน (2^x = 2⁵) เลขชี้กำลังต้องเท่ากัน ดังนั้น x = 5',
  },

  // ===== ชุดที่ 2 : ยาก =====
  {
    id: 's2-h1',
    setId: 's2',
    difficulty: 'hard',
    topic: 'การจัดหมู่',
    questionText: 'In how many ways can the letters of the word "MATHS" be arranged (all letters distinct)?',
    questionTranslationTh: 'จำนวนวิธีจัดเรียงตัวอักษรในคำว่า "MATHS" ทั้งหมดมีกี่วิธี (ตัวอักษรไม่ซ้ำกัน)?',
    choices: ['60', '100', '120', '150'],
    answer: '120',
    explanation:
      'คำว่า MATHS มีตัวอักษร 5 ตัว และทุกตัวไม่ซ้ำกันเลย (M-A-T-H-S)\nจำนวนวิธีเรียงตัวอักษร 5 ตัวที่แตกต่างกันทั้งหมด = 5! = 5×4×3×2×1 = 120 วิธี',
  },
  {
    id: 's2-h2',
    setId: 's2',
    difficulty: 'hard',
    topic: 'พีชคณิต',
    questionText: 'Let x and y be positive integers with xy = 36. Find the smallest possible value of x + y.',
    questionTranslationTh: 'ให้ x และ y เป็นจำนวนเต็มบวกที่ xy = 36 จงหาผลบวกที่น้อยที่สุดที่เป็นไปได้ของ x + y',
    choices: ['10', '12', '13', '15'],
    answer: '12',
    explanation:
      'แจกแจงคู่ตัวประกอบของ 36 ทั้งหมด: (1,36) รวม=37, (2,18) รวม=20, (3,12) รวม=15, (4,9) รวม=13, (6,6) รวม=12\nยิ่งสองจำนวนใกล้เคียงกัน ผลบวกยิ่งน้อยลง คู่ที่ให้ผลบวกน้อยที่สุดคือ 6 กับ 6\nดังนั้นผลบวกน้อยที่สุด = 6+6 = 12',
  },
  {
    id: 's2-h3',
    setId: 's2',
    difficulty: 'hard',
    topic: 'เรขาคณิต',
    questionText: 'A circle has radius 7 units. Find the area of a sector with a central angle of 90° (use π ≈ 22/7).',
    questionTranslationTh: 'วงกลมวงหนึ่งมีรัศมี 7 หน่วย จงหาพื้นที่ของเซกเตอร์ที่มีมุมที่จุดศูนย์กลาง 90 องศา (ใช้ π ≈ 22/7)',
    choices: ['30.5', '35.5', '38.5', '44'],
    answer: '38.5',
    explanation:
      'พื้นที่วงกลมทั้งวง = πr² = (22/7)×7² = (22/7)×49 = 154\nเซกเตอร์มุม 90 องศา คิดเป็นสัดส่วน 90/360 = 1/4 ของวงกลมทั้งวง\nพื้นที่เซกเตอร์ = (1/4)×154 = 38.5 ตารางหน่วย',
  },
  {
    id: 's2-h4',
    setId: 's2',
    difficulty: 'hard',
    topic: 'การจัดหมู่',
    questionText: 'Find the value of n such that C(n,2) = 45.',
    questionTranslationTh: 'จงหาค่าของ n ที่ทำให้ C(n,2) = 45',
    choices: ['8', '9', '10', '12'],
    answer: '10',
    explanation:
      'C(n,2) คือจำนวนวิธีเลือก 2 สิ่งจาก n สิ่ง คำนวณจาก n(n-1)/2\nตั้งสมการ n(n-1)/2 = 45 คูณสองข้างด้วย 2: n(n-1) = 90\nลองแทน n=10: 10×9 = 90 ตรงพอดี\nดังนั้น n = 10',
  },
  {
    id: 's2-h5',
    setId: 's2',
    difficulty: 'hard',
    topic: 'ทฤษฎีจำนวน',
    questionText:
      'Let a be a positive integer. If a leaves remainder 3 when divided by 7, and remainder 2 when divided by 5, find the smallest possible value of a.',
    questionTranslationTh:
      'กำหนดให้ a เป็นจำนวนเต็มบวก ถ้า a หารด้วย 7 เหลือเศษ 3 และ a หารด้วย 5 เหลือเศษ 2 จงหาค่า a ที่น้อยที่สุด',
    choices: ['12', '17', '22', '24'],
    answer: '17',
    explanation:
      'ไล่หาจำนวนที่หารด้วย 7 เหลือเศษ 3 ก่อน: 3, 10, 17, 24, 31, ...\nตรวจแต่ละตัวว่าหารด้วย 5 เหลือเศษ 2 หรือไม่: 3÷5 เหลือ 3 (ไม่ใช่), 10÷5 เหลือ 0 (ไม่ใช่), 17÷5 เหลือ 2 (ใช่!)\nดังนั้นค่า a ที่น้อยที่สุดที่ตรงเงื่อนไขทั้งสองข้อคือ 17',
  },

  // ===== ชุดที่ 3 : โจทย์จากข้อสอบจริง (ง่าย) =====
  {
    id: 's3-e1',
    setId: 's3',
    difficulty: 'easy',
    topic: 'การนับสี่เหลี่ยมผืนผ้า',
    questionText:
      'A row of 3 unit squares contains 6 rectangles of all sizes. How many rectangles are in a row of 23 unit squares?',
    questionTranslationTh:
      'แถวของสี่เหลี่ยมจัตุรัสหน่วย 3 ช่อง มีสี่เหลี่ยมผืนผ้าทุกขนาดรวม 6 รูป ถ้าแถวมี 23 ช่อง จะมีสี่เหลี่ยมผืนผ้าทั้งหมดกี่รูป?',
    choices: ['210', '231', '253', '276'],
    answer: '276',
    explanation:
      'ในแถวของช่องสี่เหลี่ยมจัตุรัส n ช่อง จำนวนสี่เหลี่ยมผืนผ้าทุกขนาด (รวมสี่เหลี่ยมจัตุรัสด้วย) คำนวณจากสูตร n(n+1)/2\nตรวจกับตัวอย่างในโจทย์ n=3: 3×4/2 = 6 ตรงกับที่โจทย์บอกไว้พอดี\nแทนค่า n=23: 23×24/2 = 552/2 = 276',
    source: 'Past Paper Road to ASMOPSS 2023 · Math Secondary',
  },
  {
    id: 's3-e2',
    setId: 's3',
    difficulty: 'easy',
    topic: 'ทฤษฎีจำนวน (เลขโดดหลักหน่วย)',
    questionText: 'Find the units digit of 3^2025 + 9^677.',
    questionTranslationTh: 'จงหาเลขโดดหลักหน่วยของ 3^2025 + 9^677',
    answer: '2',
    explanation:
      'เลขหลักหน่วยของเลขยกกำลังจะวนซ้ำเป็นรอบ ต้องหาความยาวรอบของแต่ละฐานก่อน\nฐาน 3: หลักหน่วยวนซ้ำทุก 4 ครั้ง คือ 3,9,7,1,... เนื่องจาก 2025 หารด้วย 4 เหลือเศษ 1 จึงตรงตำแหน่งแรกในรอบ ได้หลักหน่วย 3\nฐาน 9: หลักหน่วยวนซ้ำทุก 2 ครั้ง คือ 9,1,... เนื่องจาก 677 เป็นเลขคี่ จึงตรงตำแหน่งแรกในรอบ ได้หลักหน่วย 9\nนำหลักหน่วยมาบวกกัน: 3+9 = 12 ซึ่งมีหลักหน่วยเป็น 2\nดังนั้นหลักหน่วยของผลบวกทั้งหมดคือ 2',
    source: 'ASMO 2019 · Maths Grade 10',
  },
  {
    id: 's3-e3',
    setId: 's3',
    difficulty: 'easy',
    topic: 'พีชคณิต (สมการเชิงเส้น)',
    questionText:
      'Nick thinks of an integer, multiplies by 4, subtracts 30, multiplies the result by 2, then subtracts 10. The result is a two-digit number. Find the largest integer Nick could have started with.',
    questionTranslationTh:
      'นิคคิดจำนวนเต็มขึ้นมา คูณด้วย 4 ลบด้วย 30 นำผลลัพธ์คูณด้วย 2 แล้วลบด้วย 10 ได้ผลลัพธ์เป็นจำนวนสองหลัก จงหาจำนวนเต็มที่มากที่สุดที่นิคคิดขึ้นได้',
    answer: '21',
    explanation:
      'ให้จำนวนที่นิคคิดคือ n เขียนสมการตามลำดับการคำนวณ: (4n-30)×2-10 = 8n-70\nผลลัพธ์สุดท้ายต้องเป็นจำนวนสองหลัก คือมีค่าตั้งแต่ 10 ถึง 99: 10 ≤ 8n-70 ≤ 99\nบวก 70 ทุกส่วน: 80 ≤ 8n ≤ 169\nหารด้วย 8 ทุกส่วน: 10 ≤ n ≤ 21.125\nเนื่องจาก n ต้องเป็นจำนวนเต็ม ค่ามากที่สุดที่เป็นไปได้คือ n=21\nตรวจคำตอบ: 8(21)-70 = 98 เป็นจำนวนสองหลักจริง ใช้ได้',
    source: 'ASMO 2019 · Maths Grade 10',
  },

  // ===== ชุดที่ 3 : โจทย์จากข้อสอบจริง (กลาง) =====
  {
    id: 's3-m1',
    setId: 's3',
    difficulty: 'medium',
    topic: 'ทฤษฎีจำนวน (การหารลงตัว)',
    questionText:
      'Suppose S is the product of three consecutive integers and S is divisible by 7. Which of the following is not necessarily a factor of S?',
    questionTranslationTh:
      'กำหนดให้ S เป็นผลคูณของจำนวนเต็มสามจำนวนที่เรียงติดกัน และ S หารด้วย 7 ลงตัว ข้อใดต่อไปนี้ไม่จำเป็นต้องเป็นตัวประกอบของ S เสมอไป?',
    choices: ['6', '14', '21', '28', '42'],
    answer: '28',
    explanation:
      'ข้อเท็จจริงพื้นฐาน: ผลคูณของจำนวนเต็ม 3 จำนวนเรียงติดกัน หารด้วย 6 ลงตัวเสมอ เพราะในสามจำนวนติดกันจะมีตัวหนึ่งหารด้วย 3 ลงตัว และมีอย่างน้อยหนึ่งตัวเป็นเลขคู่\nเมื่อ S หารด้วย 7 ลงตัวด้วย จึงสรุปได้ว่า S หารด้วย 6×7=42 ลงตัวเสมอ ทำให้ 6, 14, 21, 42 (ตัวประกอบของ 42) เป็นตัวประกอบของ S แน่นอน\nแต่ 28 = 4×7 ต้องการตัวประกอบ 4 (คือ 2²) เพิ่มเติม ซึ่งไม่ได้การันตีเสมอไป เช่น ถ้าสามจำนวนคือ 1,2,3 จะมีเลขคู่เพียงตัวเดียว (คือ 2) ทำให้ S หารด้วย 4 ไม่ลงตัว\nดังนั้น 28 คือข้อที่ไม่จำเป็นต้องเป็นตัวประกอบของ S เสมอไป',
    source: 'Road to ASMOPSS 2022 · Math Secondary',
  },
  {
    id: 's3-m2',
    setId: 's3',
    difficulty: 'medium',
    topic: 'การนับ (หลักการรวม-ตัด)',
    questionText: 'How many positive integers not greater than 2022 are divisible by 3 or 4 but not divisible by 5?',
    questionTranslationTh:
      'จำนวนเต็มบวกที่ไม่เกิน 2022 ที่หารด้วย 3 หรือ 4 ลงตัว แต่หารด้วย 5 ไม่ลงตัว มีทั้งหมดกี่จำนวน?',
    choices: ['775', '776', '809', '911', '944'],
    answer: '809',
    explanation:
      'ใช้หลักการรวม-ตัด (Inclusion-Exclusion) หาจำนวนที่หารด้วย 3 หรือ 4 ลงตัวก่อน:\n⌊2022/3⌋+⌊2022/4⌋-⌊2022/12⌋ = 674+505-168 = 1011 (ลบส่วนที่หารทั้ง 3 และ 4 ลงตัว เพราะถูกนับซ้ำ)\nจากนั้นหาว่าในจำนวน 1011 ตัวนี้ มีกี่ตัวที่หารด้วย 5 ลงตัวด้วย (ต้องตัดออก) โดยใช้หลักการเดียวกัน:\n⌊2022/15⌋+⌊2022/20⌋-⌊2022/60⌋ = 134+101-33 = 202\nคำตอบสุดท้าย = 1011-202 = 809',
    source: 'Road to ASMOPSS 2022 · Math Secondary',
  },
  {
    id: 's3-m3',
    setId: 's3',
    difficulty: 'medium',
    topic: 'อัตราเร็ว (การเคลื่อนที่วงกลม)',
    questionText:
      'Fibo and Aci run in opposite directions on a circular track at constant speeds from the same point. They meet first after Fibo runs 120 m, and meet again after Aci runs 200 m past the first meeting point. Find the track length.',
    questionTranslationTh:
      'ฟีโบและอาซีวิ่งสวนทางกันบนลู่วิ่งวงกลมด้วยความเร็วคงที่จากจุดเดียวกัน พบกันครั้งแรกหลังฟีโบวิ่งได้ 120 เมตร แล้วพบกันอีกครั้งหลังอาซีวิ่งเลยจุดพบกันครั้งแรกไป 200 เมตร ลู่วิ่งยาวเท่าใด?',
    choices: ['220', '320', '440', '520', '660'],
    answer: '320',
    explanation:
      'หลักสำคัญของโจทย์วิ่งสวนทางบนลู่วงกลม: อัตราส่วนความเร็วของทั้งสองคนคงที่ตลอด ไม่ว่าช่วงไหน\nให้ลู่วิ่งยาว L เมตร ตอนพบกันครั้งแรก ฟีโบวิ่งไป 120 เมตร อาซีวิ่งไปเหลือ L-120 เมตร (รวมกันครบ 1 รอบลู่พอดี)\nช่วงจากพบครั้งแรกถึงพบครั้งที่สอง ทั้งคู่วิ่งรวมกันอีกครบ 1 รอบลู่ โดยอาซีวิ่ง 200 เมตร ฟีโบจึงวิ่ง L-200 เมตร\nอัตราส่วนระยะทางในสองช่วงต้องเท่ากัน: 120/(L-120) = (L-200)/200\nคูณไขว้: 24000 = L²-320L+24000 → 0 = L²-320L → L(L-320)=0\nดังนั้น L=320 (ไม่นับ L=0) ลู่วิ่งยาว 320 เมตร',
    source: 'Road to ASMOPSS 2022 · Math Secondary',
  },
  {
    id: 's3-m4',
    setId: 's3',
    difficulty: 'medium',
    topic: 'การจัดหมู่ (stars and bars)',
    questionText: '88 one-dollar bills are distributed to 8 students, each receiving at least $10. In how many ways can this be done?',
    questionTranslationTh:
      'แจกธนบัตรใบละ 1 ดอลลาร์ 88 ใบ ให้นักเรียน 8 คน โดยแต่ละคนต้องได้อย่างน้อย 10 ดอลลาร์ มีวิธีแจกได้กี่วิธี?',
    choices: ['8', '585', '6435', '64,276,915,527'],
    answer: '6435',
    explanation:
      'แจกเงินขั้นต่ำ 10 ดอลลาร์ให้ทั้ง 8 คนก่อน ใช้เงินไป 8×10=80 ดอลลาร์\nเงินที่เหลือ 88-80=8 ดอลลาร์ แจกอย่างอิสระให้ 8 คน (แต่ละคนได้ 0 ดอลลาร์เพิ่มก็ได้)\nนี่คือปัญหาแบ่งของ 8 ชิ้นที่เหมือนกันให้ 8 กลุ่ม ใช้เทคนิค "ดาวและคั่น" (stars and bars): C(n+k-1, k-1) เมื่อ n=8 (ของ), k=8 (กลุ่ม)\n= C(15,7) = 6435 วิธี',
    source: 'Past Paper Road to ASMOPSS 2023 · Math Secondary',
  },
  {
    id: 's3-m5',
    setId: 's3',
    difficulty: 'medium',
    topic: 'ทฤษฎีจำนวน (อนุกรม)',
    questionText: 'The sum of 18 consecutive positive integers is a perfect square. Find the smallest possible value of this sum.',
    questionTranslationTh:
      'ผลบวกของจำนวนเต็มบวกเรียงติดกัน 18 จำนวน เป็นจำนวนกำลังสองสมบูรณ์ จงหาค่าที่น้อยที่สุดที่เป็นไปได้ของผลบวกนี้',
    answer: '225',
    explanation:
      'ให้จำนวนแรกในลำดับคือ a จำนวนทั้ง 18 ตัวคือ a, a+1, ..., a+17\nผลบวก = 18a + (0+1+...+17) = 18a + 153 = 9(2a+17)\nเนื่องจาก 9=3² เป็นกำลังสองอยู่แล้ว ผลคูณทั้งหมดจะเป็นกำลังสองสมบูรณ์ก็ต่อเมื่อ (2a+17) เป็นกำลังสองสมบูรณ์ด้วย\n2a+17 เป็นเลขคี่เสมอ และเมื่อ a≥1 จะได้ 2a+17 ≥ 19 กำลังสองคี่ตัวถัดไปที่มากกว่า 19 คือ 25 (=5²)\nแก้สมการ 2a+17=25 ได้ a=4\nผลบวก = 9×25 = 225',
    source: 'ASMO 2019 · Maths Grade 10',
  },
  {
    id: 's3-m6',
    setId: 's3',
    difficulty: 'medium',
    topic: 'ทฤษฎีจำนวน (แฟกทอเรียล)',
    questionText: 'Find the smallest natural number x such that x! is divisible by 1000.',
    questionTranslationTh: 'จงหาจำนวนนับ x ที่น้อยที่สุดที่ทำให้ x! หารด้วย 1000 ลงตัว',
    answer: '15',
    explanation:
      '1000 = 10³ = 2³×5³ ดังนั้น x! ต้องมีตัวประกอบ 5 อย่างน้อย 3 ตัว (ตัวประกอบ 2 มีเยอะกว่าอยู่แล้วไม่ใช่ปัญหา)\nนับตัวประกอบ 5 ที่ x=15: มาจาก 5, 10, 15 รวมเป็น 3 ตัวพอดี\nที่ x=14 หรือน้อยกว่า จะมีตัวประกอบ 5 เพียง 2 ตัว (จาก 5,10) ไม่พอ\nดังนั้นค่า x ที่น้อยที่สุดคือ 15',
    source: 'ASMO 2020 · Maths Grade 10-11',
  },
  {
    id: 's3-m7',
    setId: 's3',
    difficulty: 'medium',
    topic: 'ทฤษฎีจำนวน (ห.ร.ม.)',
    questionText: 'Find the largest number k that divides 5430, 5814, and 5958, leaving the same remainder each time.',
    questionTranslationTh: 'จงหาจำนวน k ที่มากที่สุดที่หาร 5430, 5814 และ 5958 แล้วเหลือเศษเท่ากันทุกจำนวน',
    answer: '48',
    explanation:
      'เมื่อ k หารตัวเลขหลายตัวแล้วเหลือเศษเท่ากันทุกครั้ง k ต้องหารผลต่างระหว่างคู่ตัวเลขเหล่านั้นลงตัวพอดี (เพราะเศษที่เท่ากันหักล้างกันไปเมื่อลบกัน)\nหาผลต่างทีละคู่: 5814-5430=384, 5958-5814=144, 5958-5430=528\nค่า k มากที่สุดคือ ห.ร.ม. (GCD) ของ 384, 144, 528\nหา GCD(384,144) ด้วยยุคลิด: 384=2×144+96, 144=1×96+48, 96=2×48+0 → GCD=48\nตรวจกับ 528: 528÷48=11 ลงตัวพอดี ยืนยันว่า GCD ทั้งสามคือ 48',
    source: 'ASMO 2020 · Maths Grade 10-11',
  },

  // ===== ชุดที่ 3 : โจทย์จากข้อสอบจริง (ยาก) =====
  {
    id: 's3-h1',
    setId: 's3',
    difficulty: 'hard',
    topic: 'การนับบนตาราง',
    questionText:
      'In an 11×11 grid, the center square is colored black. How many squares of any size drawn on the grid do NOT contain the black square?',
    questionTranslationTh:
      'ตารางขนาด 11×11 มีช่องกึ่งกลางระบายสีดำ จงหาจำนวนรูปสี่เหลี่ยมจัตุรัสทุกขนาดบนตารางที่ไม่มีช่องสีดำอยู่ภายใน',
    choices: ['120', '146', '360', '386', '506'],
    answer: '360',
    explanation:
      'ขั้นที่ 1: นับจำนวนสี่เหลี่ยมจัตุรัสทุกขนาดในตาราง 11×11 ทั้งหมด สี่เหลี่ยมขนาด k×k วางได้ (12-k)² แบบ รวมทุกขนาด k=1 ถึง 11 ได้ 1²+2²+...+11² = 506 รูป\nขั้นที่ 2: นับจำนวนสี่เหลี่ยมที่ครอบคลุมช่องกึ่งกลาง (แถวและหลักที่ 6) รวมทุกขนาดได้ 146 รูป\nขั้นที่ 3: จำนวนที่ไม่มีช่องสีดำ = จำนวนทั้งหมด - จำนวนที่ครอบคลุมช่องสีดำ = 506-146 = 360',
    source: 'Road to ASMOPSS 2022 · Math Secondary',
  },
  {
    id: 's3-h2',
    setId: 's3',
    difficulty: 'hard',
    topic: 'เรขาคณิตทรงตัน (การนับระนาบ)',
    questionText: 'How many distinct planes pass through at least three vertices of a cube?',
    questionTranslationTh: 'มีระนาบที่แตกต่างกันกี่ระนาบที่ผ่านจุดยอดอย่างน้อยสามจุดของลูกบาศก์?',
    choices: ['6', '8', '14', '20', 'None of these'],
    answer: '20',
    explanation:
      'ลูกบาศก์มีจุดยอด 8 จุด แบ่งระนาบที่เกิดขึ้นเป็น 2 กลุ่ม\nกลุ่มที่ 1 (ระนาบที่มี 4 จุดยอดร่วม): ระนาบหน้าทั้ง 6 หน้า บวกระนาบทแยงมุม (สี่เหลี่ยมผืนผ้าตัดขวางในแนวทแยง) อีก 6 ระนาบ รวม 12 ระนาบ\nกลุ่มที่ 2 (ระนาบที่มีเพียง 3 จุดยอด): สามเหลี่ยมที่เกิดจากการตัดมุมของลูกบาศก์ 1 ระนาบต่อ 1 มุม รวม 8 ระนาบ\nรวมทั้งหมด = 12+8 = 20 ระนาบ',
    source: 'Past Paper Road to ASMOPSS 2023 · Math Secondary',
  },
  {
    id: 's3-h3',
    setId: 's3',
    difficulty: 'hard',
    topic: 'เรขาคณิตทรงตัน (ปริมาตร)',
    questionText:
      'A regular octahedron is formed by joining the centers of the faces of a cube with side length 2. Find its volume.',
    questionTranslationTh:
      'รูปแปดหน้าปกติเกิดจากการเชื่อมจุดศูนย์กลางหน้าทั้งหกของลูกบาศก์ด้านยาว 2 หน่วย รูปแปดหน้านี้มีปริมาตรเท่าใด?',
    choices: ['1/2', '2/3', '4/3', '2', 'None of these'],
    answer: '4/3',
    explanation:
      'จุดศูนย์กลางของหน้าทั้ง 6 หน้าของลูกบาศก์ด้านยาว 2 หน่วย แต่ละจุดห่างจากศูนย์กลางลูกบาศก์เท่ากับครึ่งหนึ่งของด้าน คือ 1 หน่วย\nเมื่อเชื่อมจุดทั้ง 6 นี้ จะได้รูปแปดหน้าปกติที่มีระยะจากศูนย์กลางถึงจุดยอด r=1\nรูปทรงแบบนี้มีสูตรปริมาตร = (4/3)r³\nแทนค่า: ปริมาตร = (4/3)×1³ = 4/3 ลูกบาศก์หน่วย',
    source: 'Past Paper Road to ASMOPSS 2023 · Math Secondary',
  },
  {
    id: 's3-h4',
    setId: 's3',
    difficulty: 'hard',
    topic: 'เรขาคณิต (มุม)',
    questionText:
      'Triangle ABC has a right angle at A with AB = AC. Points D, E lie on BC such that BD:DE:EC = 3:5:4. Find angle DAE. (In degrees — answer with the number only.)',
    questionTranslationTh:
      'สามเหลี่ยม ABC มีมุม A เป็นมุมฉาก และ AB=AC จุด D, E อยู่บน BC โดย BD:DE:EC = 3:5:4 จงหาขนาดมุม DAE (หน่วยองศา ตอบเฉพาะตัวเลข)',
    answer: '45',
    explanation:
      'นี่คือโจทย์คลาสสิกที่พิสูจน์ด้วยเทคนิคการหมุนรูป (rotation)\nสังเกตว่า BD:DE:EC = 3:5:4 ตรงกับสามเหลี่ยมพีทาโกรัสชุด 3-4-5 (เพราะ 3²+4²=5² คือ 9+16=25) นั่นคือ BD²+EC²=DE² พอดี\nเมื่อเงื่อนไขนี้เป็นจริงในสามเหลี่ยมมุมฉากหน้าจั่ว (มุม A ฉาก, AB=AC) พิสูจน์ได้ว่ามุม DAE เท่ากับครึ่งหนึ่งของมุม BAC เสมอ ไม่ว่า D, E จะอยู่ตำแหน่งใดบน BC (ตราบใดที่สัดส่วนเป็นแบบพีทาโกรัส)\nเนื่องจากมุม BAC = 90 องศา จึงได้มุม DAE = 90/2 = 45 องศา',
    source: 'ASMO 2019 · Maths Grade 10',
  },
  {
    id: 's3-h5',
    setId: 's3',
    difficulty: 'hard',
    topic: 'ทฤษฎีจำนวน (หลักและการหารลงตัว)',
    questionText:
      'How many three-digit positive integers have every digit not divisible by 2, 3, or 5, and the number itself also not divisible by 2, 3, or 5?',
    questionTranslationTh:
      'จำนวนเต็มบวกสามหลักที่ทุกหลักไม่หารด้วย 2, 3 หรือ 5 ลงตัว และตัวจำนวนเองก็ไม่หารด้วย 2, 3 หรือ 5 ลงตัวด้วย มีทั้งหมดกี่จำนวน?',
    answer: '0',
    explanation:
      'หาก่อนว่าเลขโดด (0-9) ตัวไหนไม่หารด้วย 2, 3, หรือ 5 ลงตัว: ตัด 0,2,4,6,8 (หาร2), ตัด 3,9 (หาร3), ตัด 5 (หาร5) เหลือเพียง 1 กับ 7 เท่านั้น\nดังนั้นเลขสามหลักที่เป็นไปได้ต้องประกอบด้วยเลข 1 และ 7 เท่านั้น (เช่น 111, 117, 771 ฯลฯ)\nแต่ทั้ง 1 และ 7 ต่างหารด้วย 3 เหลือเศษ 1 เท่ากัน ผลรวมของเลขสามหลัก (1+1+1 อย่างน้อย) จะหารด้วย 3 ลงตัวเสมอ ไม่ว่าจะเลือกหลักไหนเป็น 1 หรือ 7\nเมื่อผลรวมของเลขโดดหารด้วย 3 ลงตัว ตัวเลขทั้งจำนวนก็หารด้วย 3 ลงตัวด้วย (คุณสมบัติการหารด้วย 3) ซึ่งขัดกับเงื่อนไข\nจึงไม่มีจำนวนใดสอดคล้องเลย คำตอบคือ 0',
    source: 'ASMO 2019 · Maths Grade 10',
  },
  {
    id: 's3-h6',
    setId: 's3',
    difficulty: 'hard',
    topic: 'การจัดหมู่ (การเรียงสับเปลี่ยน)',
    questionText: 'In how many ways can the letters of the word "MURMUR" be arranged such that no two identical letters are adjacent?',
    questionTranslationTh: 'คำว่า "MURMUR" สามารถเรียงตัวอักษรใหม่ได้กี่วิธี โดยตัวอักษรที่ซ้ำกันต้องไม่อยู่ติดกัน?',
    answer: '30',
    explanation:
      'MURMUR มีตัวอักษร 6 ตัว ประกอบด้วยคู่ซ้ำ 3 คู่: M(×2), U(×2), R(×2)\nจำนวนวิธีเรียงทั้งหมด (ไม่มีเงื่อนไข) = 6!/(2!2!2!) = 720/8 = 90 วิธี\nใช้หลักการรวม-ตัดลบวิธีที่มีคู่ใดคู่หนึ่งติดกันออก ให้ A,B,C คือเหตุการณ์ MM, UU, RR ติดกันตามลำดับ\n|A|=|B|=|C|=5!/(2!2!)=30 (มัดคู่หนึ่งเป็นก้อน), |A∩B|=|A∩C|=|B∩C|=4!/2!=12, |A∩B∩C|=3!=6\n|A∪B∪C| = 30×3-12×3+6 = 90-36+6 = 60\nวิธีที่ไม่มีตัวอักษรซ้ำติดกันเลย = 90-60 = 30 วิธี',
    source: 'ASMO 2020 · Maths Grade 10-11',
  },
  {
    id: 's3-h7',
    setId: 's3',
    difficulty: 'hard',
    topic: 'ทฤษฎีจำนวน (ลอการิทึม)',
    questionText: 'If 2^2001 and 5^2001 are written out in full, how many digits do they have in total?',
    questionTranslationTh: 'ถ้าเขียน 2^2001 และ 5^2001 เต็มรูปแบบ จะมีจำนวนหลักรวมกันทั้งหมดกี่หลัก?',
    answer: '2002',
    explanation:
      'จำนวนหลักของตัวเลข N ใดๆ คำนวณจากสูตร ⌊log₁₀N⌋+1\nจุดสำคัญ: log₁₀2 + log₁₀5 = log₁₀10 = 1 พอดี ดังนั้น 2001×log₁₀2 กับ 2001×log₁₀5 บวกกันได้ 2001 พอดี (จำนวนเต็ม)\nเนื่องจากทั้งสองค่าไม่ใช่จำนวนเต็มเดี่ยวๆ แต่ผลรวมเป็นจำนวนเต็มพอดี เศษทศนิยมของทั้งสองจึงรวมกันได้ 1 พอดี\nดังนั้น ⌊2001×log₁₀2⌋+⌊2001×log₁₀5⌋ = 2001-1 = 2000\nรวมจำนวนหลักทั้งสอง = 2000+1+1 = 2002',
    source: 'ASMO 2020 · Maths Grade 10-11',
  },
  {
    id: 's3-h8',
    setId: 's3',
    difficulty: 'hard',
    topic: 'พีชคณิต (เอกลักษณ์สมมาตร)',
    questionText:
      'Find natural numbers x, y, z satisfying x³+y³+z³=3xyz and x²=2(y+z). (What is the common value x=y=z? Answer with the number only.)',
    questionTranslationTh:
      'จงหาจำนวนนับ x, y, z ที่สอดคล้องกับ x³+y³+z³=3xyz และ x²=2(y+z) (คำตอบคือ x=y=z เท่ากับเท่าใด ตอบเฉพาะตัวเลข)',
    answer: '4',
    explanation:
      'ใช้เอกลักษณ์: x³+y³+z³-3xyz = (x+y+z)(x²+y²+z²-xy-yz-zx)\nโจทย์กำหนด x³+y³+z³=3xyz จึงได้ (x+y+z)(x²+y²+z²-xy-yz-zx) = 0\nเนื่องจาก x,y,z เป็นจำนวนนับ (บวกทั้งหมด) ผลบวก x+y+z จึงไม่มีทางเป็น 0\nดังนั้นพจน์ที่สองต้องเป็น 0 ซึ่งเขียนใหม่ได้เป็น ½[(x-y)²+(y-z)²+(z-x)²] = 0 เป็นจริงได้ก็ต่อเมื่อ x=y=z\nแทน x=y=z=n ลงในสมการที่สอง: n² = 2(n+n) = 4n หารด้วย n (n≠0): n=4\nดังนั้น x=y=z=4',
    source: 'ASMO 2020 · Maths Grade 10-11',
  },
]
