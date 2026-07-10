---
title: 'Enhancing Deep Learning Baselines: PyTorch Implementations for CIFAR-10, IMDb, and IWSLT15'
image: /assets/ie229/ie229.png
summary: 'Enhancing Deep Learning Baselines'
created: 2026-06-20
updated: 2026-06-20
published: 2026-07-02 

tags:
  - 'Coursework'
  - 'Project'
  - 'Deep Learning'
  - 'Teamwork'
---


## Introduction
This final report presents our comprehensive solutions and code optimizations for three core pillars of Artificial Intelligence: Computer Vision, Sentiment Analysis, and Machine Translation. Developed as an upgrade from the fundamental lecture baselines, our project demonstrates significant performance enhancements across all assigned tasks using PyTorch.

## Result

### Problem 1 (Image Classification)
We advanced the baseline CNN by implementing a modified ResNet-18 architecture specifically adapted for 32x32 images. By integrating a sophisticated training recipe—including SGD with Nesterov momentum, cosine learning rate decay, label smoothing, and heavy data augmentations (RandAugment, MixUp, and RandomErasing)—our model achieved an outstanding test accuracy of 96.66% on the CIFAR-10 dataset, vastly exceeding the 75% requirement. 

Figure 1: Test accuracy curve of modified ResNet-18 over 80 epochs on CIFAR-10
![alt text](/assets/ie229/Problem1.png "Problem1")

### Problem 2 (Sentiment Analysis)
Moving beyond single-direction architectures, we constructed a 2-layer Bidirectional LSTM classifier utilizing pretrained 300-dimensional GloVe word embeddings. By concatenating three pooling mechanisms (Attention, Max, and Mean pooling) and incorporating structural regularizations like Layer Normalization and Dropout, the model reached a clean, held-out test accuracy of 90.86% on the IMDb movie review dataset.

Figure 2: Validation accuracy and final test performance of BiLSTM over 20 epochs on IMDb dataset
![alt text](/assets/ie229/Problem2.jpg "Problem2")

### Problem 3 (Machine Translation)
To address the fixed-vector bottleneck in standard sequence-to-sequence models, we engineered an Encoder-Decoder framework empowered by a Global Dot-Product Attention mechanism on a deeper 2-layer LSTM backbone. Trained with the Adam optimizer and length-sorted batching, our system achieved a BLEU score of 21.83% on the IWSLT15 (en-vi) test set, more than doubling the professor's 10% target

Figure 3: Test BLEU score progression (greedy decoding) after 10 and 20 epochs on IWSLT15 (en-vi)
![alt text](/assets/ie229/Problem3.jpg "Problem2")


