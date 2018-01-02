/**
 * Created by owjie on 12/30/2017.
 * author:欧文杰
 * QQ:825455115
 * 仅供学习交流，严禁用于商业用途
 */
var map = {
    tier1: [
        [8, 0, 50, 51, 50, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [13, 0, 0, 2, 0, 1, 15, 9, 0, 1, 0],
        [0, 54, 0, 1, 0, 1, 16, 13, 0, 1, 0],
        [1, 2, 1, 1, 0, 1, 1, 1, 2, 1, 0],
        [9, 0, 0, 1, 0, 2, 58, 66, 58, 1, 0],
        [0, 55, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 4, 1, 1, 1, 2, 1],
        [13, 0, 9, 1, 11, 0, 0, 1, 0, 58, 0],
        [13, 22, 9, 1, 0, 0, 0, 1, 50, 14, 50]
    ],
    tier2: [
        [7, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 64, 0, 64, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1],
        [0, 1, 9, 9, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 9, 0, 6, 0, 0, 0, 6, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 1, 16, 16, 6, 0, 0, 0, 1, 0, 0],
        [0, 1, 15, 15, 1, 0, 0, 0, 6, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 1, 14, 14, 1, 0, 0, 0, 1, 0, 0],
        [8, 1, 14, 0, 6, 0, 0, 0, 6, 0, 0]
    ],
    tier3: [
        [9, 10, 1, 9, 14, 9, 1, 0, 1, 0, 13],
        [0, 13, 1, 14, 9, 14, 1, 0, 2, 58, 0],
        [66, 0, 1, 9, 10, 9, 1, 0, 1, 1, 1],
        [2, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
        [0, 0, 58, 0, 0, 0, 50, 0, 0, 0, 0],
        [2, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
        [54, 0, 1, 1, 0, 1, 1, 0, 1, 0, 13],
        [0, 9, 1, 0, 0, 0, 1, 0, 2, 66, 9],
        [13, 15, 1, 0, 0, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 51, 1, 0, 0],
        [7, 0, 0, 0, 0, 0, 1, 0, 2, 0, 8]
    ],
    tier4: [
        [0, 10, 0, 1, 1, 17, 1, 1, 0, 0, 0],
        [13, 0, 9, 1, 0, 0, 0, 1, 9, 0, 14],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 55, 0],
        [1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1],
        [0, 66, 0, 2, 0, 51, 0, 0, 54, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [51, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
        [0, 1, 0, 58, 0, 1, 0, 66, 0, 1, 0],
        [0, 1, 50, 0, 9, 1, 15, 0, 13, 1, 0],
        [8, 1, 9, 50, 9, 1, 0, 0, 0, 1, 7]
    ],
    tier5: [
        [8, 1, 0, 51, 2, 0, 1, 0, 0, 2, 0],
        [0, 1, 0, 0, 1, 9, 1, 50, 50, 1, 0],
        [0, 2, 58, 0, 1, 0, 1, 9, 9, 1, 51],
        [1, 1, 2, 1, 1, 58, 1, 9, 9, 1, 0],
        [9, 0, 66, 0, 1, 0, 1, 1, 1, 1, 0],
        [9, 0, 0, 51, 1, 0, 50, 0, 0, 0, 0],
        [1, 55, 1, 1, 1, 0, 1, 1, 1, 1, 51],
        [0, 0, 0, 0, 1, 50, 1, 0, 0, 0, 0],
        [16, 9, 13, 19, 1, 0, 1, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        [7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 31]
    ],
    tier6: [
        [7, 1, 9, 9, 1, 0, 66, 0, 9, 50, 0],
        [0, 1, 9, 9, 1, 0, 1, 1, 1, 1, 2],
        [0, 1, 1, 51, 1, 0, 1, 13, 0, 54, 0],
        [0, 2, 2, 0, 2, 0, 1, 0, 0, 0, 58],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [0, 0, 51, 66, 0, 9, 0, 54, 55, 0, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [66, 0, 0, 0, 1, 0, 2, 2, 0, 2, 0],
        [0, 58, 0, 16, 1, 0, 1, 1, 51, 1, 51],
        [2, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0],
        [0, 50, 0, 0, 54, 0, 1, 13, 13, 1, 8]
    ],
    tier7: [
        [8, 1, 15, 1, 0, 0, 0, 1, 9, 1, 50],
        [0, 1, 13, 1, 0, 0, 0, 1, 9, 1, 51],
        [0, 1, 58, 1, 51, 1, 55, 1, 13, 1, 50],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 1, 2, 1, 3, 1, 2, 1, 54, 1, 2],
        [0, 55, 0, 66, 0, 0, 0, 0, 0, 0, 0],
        [2, 1, 2, 1, 2, 1, 2, 1, 55, 1, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 58, 1, 51, 1, 14, 1, 0],
        [50, 1, 50, 1, 9, 1, 66, 1, 9, 1, 0],
        [0, 51, 0, 1, 9, 1, 14, 1, 9, 1, 7]
    ],
    tier8: [
        [7, 0, 2, 2, 0, 8, 0, 1, 9, 0, 9],
        [0, 0, 1, 1, 0, 0, 50, 1, 0, 11, 0],
        [2, 1, 1, 1, 1, 2, 1, 1, 14, 0, 13],
        [0, 1, 9, 9, 9, 0, 0, 1, 1, 5, 1],
        [13, 1, 1, 1, 1, 1, 66, 1, 63, 0, 63],
        [0, 51, 50, 51, 0, 1, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 2, 1, 58, 1, 1, 2, 1],
        [0, 0, 0, 58, 0, 0, 0, 66, 0, 0, 0],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [50, 0, 1, 15, 9, 1, 10, 13, 1, 0, 54],
        [0, 58, 3, 9, 16, 1, 9, 0, 2, 55, 0]
    ],
    tier9: [
        [0, 0, 54, 2, 0, 7, 0, 2, 50, 0, 13],
        [0, 9, 0, 1, 0, 0, 0, 1, 0, 50, 0],
        [55, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0],
        [0, 9, 0, 1, 9, 0, 9, 2, 2, 0, 0],
        [16, 0, 58, 2, 0, 15, 0, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 51, 1, 0, 0, 55],
        [9, 0, 2, 55, 9, 1, 0, 1, 32, 1, 0],
        [55, 0, 1, 0, 0, 1, 0, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 0, 1, 9, 0, 66],
        [0, 13, 1, 0, 54, 1, 58, 1, 0, 54, 0],
        [8, 0, 3, 0, 0, 2, 0, 2, 66, 0, 13]
    ],
    tier10: [
        [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [54, 54, 54, 1, 1, 0, 1, 1, 54, 54, 54],
        [0, 55, 0, 5, 0, 56, 0, 5, 0, 55, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [54, 16, 54, 1, 0, 0, 0, 1, 54, 15, 54],
        [0, 55, 0, 1, 1, 0, 1, 1, 0, 55, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        [2, 1, 2, 1, 1, 4, 1, 1, 2, 1, 2],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [7, 1, 0, 66, 0, 0, 0, 66, 0, 1, 14]
    ],
    tier11: [
        [0, 0, 0, 1, 15, 0, 2, 0, 1, 13, 9],
        [0, 34, 0, 1, 0, 58, 1, 70, 1, 0, 0],
        [0, 0, 0, 1, 2, 1, 1, 0, 2, 0, 0],
        [1, 5, 1, 1, 0, 59, 1, 1, 1, 1, 52],
        [67, 0, 67, 1, 70, 0, 2, 67, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 13, 1, 0],
        [14, 0, 0, 0, 0, 0, 2, 52, 0, 1, 0],
        [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 59],
        [0, 59, 0, 52, 2, 0, 0, 0, 58, 0, 0],
        [9, 0, 0, 0, 1, 0, 1, 1, 2, 1, 0],
        [9, 9, 9, 9, 1, 8, 1, 14, 59, 1, 7]
    ],
    tier12: [
        [0, 0, 0, 1, 9, 15, 9, 1, 0, 0, 0],
        [1, 1, 59, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 1, 67, 0, 67, 1, 0, 70, 0],
        [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0],
        [0, 67, 0, 2, 0, 70, 0, 1, 13, 0, 59],
        [1, 1, 1, 1, 0, 0, 67, 2, 0, 16, 0],
        [9, 9, 0, 1, 0, 14, 0, 1, 9, 0, 52],
        [9, 10, 0, 1, 1, 1, 1, 1, 3, 1, 2],
        [0, 0, 70, 1, 1, 17, 1, 1, 52, 0, 70],
        [1, 1, 2, 1, 13, 0, 13, 1, 1, 0, 1],
        [8, 0, 0, 58, 0, 0, 0, 58, 0, 0, 7]
    ],
    tier13: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 39, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]
    ],
    tier14: [
        [71, 0, 71, 1, 16, 9, 13, 1, 9, 9, 9],
        [0, 71, 0, 1, 52, 1, 71, 1, 0, 0, 9],
        [1, 0, 0, 1, 0, 1, 0, 1, 1, 2, 1],
        [1, 3, 1, 1, 3, 1, 2, 1, 0, 71, 0],
        [13, 0, 0, 59, 0, 72, 0, 59, 0, 0, 0],
        [0, 52, 0, 1, 1, 2, 1, 1, 13, 0, 70],
        [2, 1, 2, 1, 0, 0, 0, 1, 1, 1, 2],
        [0, 1, 0,70, 0, 2, 0, 52, 0, 52, 0],
        [67, 1, 67, 1, 1, 0, 1, 1, 2, 1, 1],
        [0, 1, 0, 1, 13, 0, 0, 1, 0, 0, 0],
        [10, 1, 0, 2, 0, 8, 0, 1, 0, 0, 7]
    ],
    tier15: [
        [16, 71, 0, 2, 0, 8, 0, 0, 0, 0, 0],
        [70, 0, 0, 1, 0, 0, 0, 1, 0, 0, 52],
        [0, 0, 52, 1, 1, 5, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 0, 0, 0, 1, 59, 0, 0],
        [0, 1, 9, 1, 0, 0, 0, 1, 0, 59, 0],
        [52, 1, 10, 1, 0, 0, 0, 1, 2, 1, 67],
        [0, 1, 9, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 14],
        [0, 2, 0, 1, 1, 0, 1, 1, 2, 1, 1],
        [59, 1, 59, 1, 0, 0, 0, 1, 0, 58, 0],
        [0, 67, 0, 1, 0, 7, 0, 2, 58, 0, 0]
    ],
    tier16: [
        [9, 59, 0, 1, 0, 7, 0, 1, 0, 0, 59],
        [9, 67, 0, 2, 0, 0, 0, 2, 52, 0, 0],
        [9, 59, 0, 1, 70, 0, 9, 1, 0, 0, 13],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
        [15, 9, 0, 1, 13, 0, 0, 1, 0, 70, 0],
        [13, 0, 72, 2, 0, 71, 0, 1, 0, 0, 0],
        [16, 9, 0, 1, 0, 0, 9, 1, 59, 0, 10],
        [1, 0, 1, 1, 1, 2, 1, 1, 1, 2, 1],
        [0, 52, 0, 1, 59, 0, 59, 1, 0, 67, 0],
        [0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 1],
        [0, 0, 0, 1, 0, 8, 0, 1, 73, 0, 49]
    ],
    tier17: [
        [0, 0, 0, 1, 0, 8, 0, 1, 15, 0, 16],
        [0, 33, 0, 1, 0, 0, 0, 1, 0, 14, 0],
        [0, 0, 0, 1, 71, 1, 59, 1, 9, 0, 9],
        [1, 5, 1, 1, 0, 1, 0, 1, 1, 5, 1],
        [63, 0, 63, 1, 2, 1, 3, 1, 71, 0, 71],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [1, 5, 1, 1, 70, 1, 52, 1, 1, 5, 1],
        [63, 0, 63, 1, 0, 0, 0, 1, 70, 0, 70],
        [0, 0, 0, 1, 1, 67, 1, 1, 0, 0, 0],
        [1, 2, 1, 1, 0, 0, 0, 1, 1, 2, 1],
        [13, 0, 0, 59, 0, 7, 0, 59, 0, 0, 13]
    ],
    tier18: [
        [8, 0, 0, 3, 0, 7, 0, 2, 67, 0, 9],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 52, 9],
        [2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 10],
        [0, 13, 0, 2, 71, 0, 71, 2, 70, 0, 9],
        [72, 0, 72, 1, 0, 0, 0, 1, 0, 59, 9],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
        [0, 70, 0, 0, 0, 0, 0, 0, 0, 72, 0],
        [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
        [67, 0, 1, 59, 59, 1, 52, 52, 1, 0, 67],
        [0, 9, 1, 59, 59, 1, 52, 52, 1, 9, 0],
        [13, 15, 1, 0, 9, 1, 9, 0, 1, 16, 13]
    ],
    tier19: [
        [7, 0, 1, 13, 0, 67, 0, 10, 1, 9, 15],
        [0, 0, 1, 0, 0, 1, 0, 0, 1, 59, 0],
        [2, 1, 1, 71, 1, 21, 1, 71, 1, 2, 1],
        [58, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 9, 0, 1, 0, 9, 1, 52, 52],
        [2, 1, 1, 0, 72, 0, 72, 0, 1, 0, 0],
        [59, 0, 1, 1, 1, 2, 1, 1, 1, 1, 2],
        [0, 0, 52, 0, 0, 0, 0, 71, 0, 0, 70],
        [2, 1, 1, 1, 1, 71, 1, 1, 13, 9, 0],
        [0, 1, 0, 2, 9, 0, 9, 1, 1, 1, 59],
        [52, 0, 59, 1, 0, 8, 0, 2, 0, 58, 0]
    ],
    tier20: [
        [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
        [15, 16, 1, 0, 0, 0, 0, 0, 1, 13, 14],
        [9, 0, 1, 0, 59, 59, 59, 0, 1, 0, 9],
        [1, 3, 1, 0, 59, 0, 59, 0, 1, 3, 1],
        [58, 0, 1, 0, 59, 59, 59, 0, 1, 0, 58],
        [0, 58, 1, 0, 0, 0, 0, 0, 1, 58, 0],
        [2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2],
        [0, 72, 0, 1, 0, 0, 0, 1, 0, 72, 0],
        [13, 0, 0, 67, 0, 7, 0, 67, 0, 0, 13]
    ],
    tier21: [
        [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0]
    ],
    tier22: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 7, 0, 1, 1, 1, 1]
    ],
    tier23: [
        [7, 0, 1, 1, 1, 0, 0, 0, 0, 0, 8],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    ],
    tier24: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [0, 8, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    tier25: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 74, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [0, 7, 0, 1, 1, 4, 1, 1, 0, 0, 0],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    tier26: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 4, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 4, 1, 1, 1, 0, 0],
        [0, 8, 0, 1, 1, 4, 1, 1, 0, 0, 0],
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    tier27: [
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [0, 7, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]
    ],
    tier28: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7]
    ],
    tier29: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [7, 0, 1, 1, 0, 8, 0, 1, 1, 0, 0]
    ],
    tier30: [
        [1, 1, 1, 1, 0, 8, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
        [0, 0, 52, 51, 50, 0, 50, 51, 52, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 7, 0, 1, 1, 1, 1]
    ],
    tier31: [
        [0, 0, 9, 9, 1, 7, 1, 0, 0, 13, 0],
        [62, 0, 9, 9, 1, 0, 1, 77, 0, 0, 0],
        [0, 77, 1, 1, 1, 0, 1, 2, 1, 57, 57],
        [0, 0, 2, 10, 1, 0, 1, 15, 1, 0, 0],
        [2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2],
        [0, 57, 0, 0, 0, 0, 0, 0, 0, 57, 0],
        [2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2],
        [0, 0, 1, 16, 1, 71, 1, 14, 2, 0, 0],
        [57, 57, 1, 2, 1, 71, 1, 1, 1, 73, 0],
        [0, 0, 0, 76, 1, 0, 1, 9, 9, 0, 73],
        [0, 13, 0, 0, 1, 8, 1, 9, 9, 0, 0]
    ],
    tier32: [
        [16, 0, 3, 0, 0, 0, 0, 0, 0, 0, 8],
        [0, 15, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [2, 1, 1, 0, 2, 0, 2, 57, 1, 1, 1],
        [77, 0, 73, 0, 1, 0, 1, 0, 1, 9, 14],
        [0, 9, 0, 73, 1, 0, 1, 0, 2, 0, 9],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [9, 9, 9, 9, 1, 0, 1, 76, 1, 9, 10],
        [0, 0, 0, 10, 1, 0, 1, 0, 2, 0, 9],
        [1, 5, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [64, 0, 64, 0, 0, 0, 0, 0, 1, 17, 1],
        [0, 0, 0, 0, 7, 0, 1, 57, 0, 0, 0]
    ],
    tier33: [
        [8, 0, 2, 71, 0, 73, 2, 0, 0, 0, 7],
        [0, 0, 1, 0, 13, 0, 1, 2, 1, 1, 1],
        [3, 1, 1, 0, 0, 9, 1, 0, 0, 0, 14],
        [0, 13, 1, 1, 2, 1, 1, 1, 1, 0, 1],
        [73, 0, 1, 0, 0, 71, 0, 1, 57, 0, 57],
        [0, 0, 1, 62, 1, 1, 2, 1, 0, 0, 0],
        [0, 73, 2, 0, 0, 57, 0, 1, 77, 0, 77],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 71, 1, 0, 77, 0, 1, 0, 0, 0],
        [62, 2, 0, 1, 9, 1, 73, 1, 0, 35, 0],
        [9, 77, 0, 3, 0, 2, 0, 1, 0, 0, 0]
    ],
    tier34: [
        [7, 0, 13, 1, 0, 9, 0, 1, 9, 9, 16],
        [0, 0, 0, 2, 73, 0, 76, 2, 0, 9, 13],
        [0, 73, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 1, 50, 1, 62, 1, 52, 1, 77],
        [0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 1, 57, 1, 51, 1, 76, 1, 58],
        [0, 0, 57, 1, 1, 1, 1, 1, 1, 1, 1],
        [62, 1, 0, 2, 0, 0, 0, 2, 77, 0, 13],
        [14, 77, 0, 1, 0, 8, 0, 1, 0, 9, 15]
    ],
    tier35: [
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 8],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 5, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 7, 0, 1, 1, 1, 1]
    ],
    tier36: [
        [0, 0, 77, 0, 0, 0, 71, 0, 76, 0, 7],
        [0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0],
        [73, 1, 1, 1, 1, 0, 1, 1, 1, 1, 73],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [76, 1, 1, 1, 0, 57, 0, 1, 1, 1, 62],
        [0, 2, 0, 0, 73, 0, 73, 0, 0, 2, 0],
        [0, 1, 1, 1, 0, 76, 0, 1, 1, 1, 76],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [62, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0],
        [14, 0, 77, 0, 9, 0, 71, 0, 62, 0, 8]
    ],
    tier37: [
        [8, 0, 2, 0, 0, 0, 0, 0, 77, 0, 14],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [3, 1, 1, 13, 13, 1, 13, 13, 1, 1, 76],
        [0, 1, 13, 13, 9, 1, 13, 13, 13, 1, 0],
        [0, 1, 9, 9, 44, 1, 11, 9, 9, 1, 0],
        [13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 62],
        [0, 1, 16, 15, 14, 1, 15, 15, 15, 1, 0],
        [0, 1, 9, 9, 9, 1, 16, 16, 16, 1, 0],
        [77, 1, 1, 10, 10, 1, 14, 9, 1, 1, 76],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 73, 0, 0, 0, 0, 0, 57, 0, 7]
    ],
    tier38: [
        [7, 0, 4, 73, 0, 0, 0, 73, 2, 0, 8],
        [0, 0, 1, 0, 9, 0, 0, 0, 1, 0, 0],
        [57, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [0, 0, 77, 77, 0, 1, 0, 1, 9, 1, 0],
        [1, 1, 1, 1, 3, 1, 0, 1, 9, 1, 0],
        [0, 0, 0, 3, 3, 1, 57, 1, 9, 1, 57],
        [0, 36, 0, 1, 1, 1, 62, 1, 0, 76, 0],
        [0, 0, 0, 1, 16, 13, 0, 1, 1, 1, 2],
        [1, 5, 1, 1, 1, 1, 1, 1, 9, 0, 57],
        [64, 0, 64, 1, 0, 0, 0, 1, 0, 76, 0],
        [0, 0, 0, 2, 62, 0, 70, 2, 77, 0, 14]
    ],
    tier39: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7],
        [0, 2, 0, 2, 0, 2, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 9],
        [0, 2, 0, 2, 0, 2, 0, 1, 1, 2, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 77],
        [0, 2, 0, 2, 0, 2, 0, 1, 73, 1, 15],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 57],
        [1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [0, 0, 57, 1, 62, 16, 76, 1, 0, 76, 0],
        [1, 57, 0, 2, 0, 1, 0, 2, 0, 0, 0],
        [0, 0, 9, 1, 0, 73, 0, 1, 13, 0, 8]
    ],
    tier40: [
        [0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0],
        [0, 62, 62, 62, 0, 0, 0, 76, 76, 76, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 57, 57, 57, 0, 77, 77, 77, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
        [16, 9, 0, 1, 73, 0, 73, 1, 13, 62, 0],
        [14, 0, 0, 1, 0, 0, 0, 1, 77, 0, 0],
        [15, 0, 76, 3, 0, 0, 0, 2, 0, 0, 7]
    ],
    tier41: [
        [13, 1, 0, 10, 1, 7, 1, 10, 0, 1, 13],
        [2, 69, 0, 0, 1, 0, 1, 0, 0, 1, 2],
        [2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 2],
        [2, 1, 2, 1, 78, 0, 78, 1, 2, 1, 2],
        [0, 0, 68, 1, 1, 0, 1, 1, 68, 0, 0],
        [60, 0, 0, 0, 3, 0, 3, 0, 0, 0, 60],
        [0, 60, 0, 53, 1, 2, 1, 53, 0, 60, 0],
        [2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
        [2, 1, 13, 0, 1, 2, 1, 0, 13, 1, 2],
        [2, 1, 9, 9, 1, 0, 1, 9, 9, 1, 2],
        [14, 1, 9, 15, 1, 8, 1, 16, 9, 1, 14]
    ],
    tier42: [
        [8, 0, 0, 1, 0, 0, 11, 1, 9, 10, 9],
        [0, 0, 53, 1, 0, 0, 0, 1, 9, 9, 9],
        [1, 1, 2, 1, 0, 0, 0, 1, 1, 0, 1],
        [0, 0, 0, 1, 1, 79, 1, 1, 68, 0, 69],
        [0, 0, 53, 2, 0, 0, 0, 2, 0, 0, 0],
        [2, 1, 1, 1, 1, 0, 1, 1, 0, 0, 68],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 1, 60, 1, 0, 0, 0, 1, 78, 0, 78],
        [14, 9, 9, 1, 1, 0, 1, 1, 1, 0, 1],
        [60, 1, 1, 1, 0, 75, 0, 1, 9, 9, 9],
        [9, 9, 16, 1, 0, 7, 0, 1, 9, 10, 9]
    ],
    tier43: [
        [7, 0, 2, 0, 53, 0, 2, 2, 78, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 0, 2, 0, 1, 79, 1, 79, 0, 1, 0],
        [3, 1, 1, 69, 1, 0, 79, 1, 38, 1, 0],
        [0, 53, 0, 0, 1, 1, 1, 1, 1, 1, 2],
        [0, 1, 2, 1, 1, 14, 0, 2, 0, 0, 0],
        [0, 1, 0, 0, 53, 0, 0, 1, 0, 0, 13],
        [2, 1, 1, 1, 1, 1, 1, 1, 68, 9, 0],
        [0, 60, 1, 14, 0, 79, 0, 1, 1, 1, 2],
        [0, 0, 1, 14, 1, 1, 0, 2, 0, 60, 0],
        [8, 0, 1, 14, 0, 3, 0, 1, 0, 0, 10]
    ],
    tier44: [
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 13, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 13, 40, 13, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 13, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 65, 0, 65, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    tier45: [
        [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
        [15, 15, 0, 1, 68, 0, 69, 1, 0, 0, 53],
        [3, 1, 79, 1, 0, 0, 0, 1, 0, 0, 0],
        [16, 16, 0, 1, 69, 0, 68, 1, 1, 1, 2],
        [3, 1, 79, 1, 1, 2, 1, 1, 0, 1, 0],
        [0, 0, 0, 2, 0, 0, 60, 0, 0, 0, 9],
        [1, 4, 1, 1, 1, 1, 1, 1, 1, 69, 0],
        [0, 0, 0, 1, 79, 0, 1, 78, 1, 1, 2],
        [0, 46, 0, 5, 0, 0, 5, 0, 2, 0, 0],
        [0, 0, 0, 1, 79, 0, 1, 78, 1, 0, 14]
    ],
    tier46: [
        [0, 69, 2, 0, 1, 17, 1, 0, 3, 0, 7],
        [13, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [15, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 68, 2, 0, 0, 0, 0, 0, 60, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [77, 0, 62, 0, 76, 1, 13, 0, 2, 53, 0],
        [0, 1, 1, 1, 0, 1, 0, 69, 1, 0, 0],
        [70, 1, 12, 1, 53, 1, 2, 1, 1, 1, 2],
        [0, 1, 0, 68, 0, 1, 0, 0, 1, 68, 0],
        [59, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 54, 0, 51, 0, 3, 0, 0, 2, 0, 8]
    ],
    tier47: [
        [8, 0, 3, 0, 0, 0, 2, 0, 0, 0, 9],
        [0, 0, 1, 0, 0, 0, 1, 69, 1, 1, 16],
        [0, 1, 1, 1, 1, 1, 1, 0, 53, 0, 9],
        [0, 1, 0, 2, 69, 0, 1, 2, 1, 1, 1],
        [0, 1, 60, 1, 0, 68, 1, 0, 68, 0, 0],
        [0, 2, 0, 1, 0, 0, 1, 9, 0, 0, 60],
        [0, 1, 0, 1, 10, 9, 1, 1, 1, 1, 2],
        [0, 1, 0, 3, 15, 16, 1, 0, 0, 0, 0],
        [69, 1, 1, 1, 1, 1, 1, 53, 1, 1, 1],
        [0, 0, 1, 13, 0, 15, 1, 0, 1, 0, 0],
        [0, 0, 2, 0, 68, 0, 2, 0, 0, 0, 7]
    ],
    tier48: [
        [0, 14, 0, 1, 0, 0, 13, 13, 13, 0, 0],
        [0, 0, 0, 1, 3, 1, 1, 1, 1, 1, 3],
        [0, 69, 0, 1, 0, 1, 78, 1, 78, 1, 0],
        [1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 53, 0, 0, 1, 78, 1, 78, 1, 0],
        [0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0],
        [60, 1, 0, 68, 0, 1, 0, 0, 0, 68, 0],
        [0, 1, 15, 0, 13, 1, 1, 5, 1, 1, 0],
        [68, 1, 1, 2, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 79, 0, 1, 0, 37, 0, 1, 0],
        [8, 1, 16, 0, 14, 1, 0, 0, 0, 1, 7]
    ],
    tier49: [
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 5, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 79, 0, 79, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 5, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 69, 0, 69, 1, 1, 1, 1],
        [7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    tier50: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 81, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 7, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};