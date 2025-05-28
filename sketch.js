let video;
let lstmmodel;

async function setup() {
  createCanvas(640, 480);

  // 啟用鏡頭
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // 載入模型
  lstmmodel = await tf.loadLayersModel('model1_tfjs/model.json');
  console.log('✅ 模型載入完成');

  // 測試假資料推論
  let testInput = tf.zeros([1, 30, 258]); // 注意：你的模型輸入是 [1, 30, 258]
  let result = lstmmodel.predict(testInput);
  result.print(); // ➜ 確認輸出 shape 是否符合預期
}

function draw() {
  background(220);
  image(video, 0, 0); // 顯示鏡頭畫面

  if (!lstmmodel) {
    text('載入中...', width / 2, height / 2);
    return;
  }

  // 可以在這裡接 MediaPipe 特徵後 ➜ predict()
}
