export var rom = [
    0x08,0x78,0x28,0x2c,0x58,0xff,0x70,0x05, // 00
    0x38,0xb0,0x01,0x18,0xb8,0x08,0x78,0x48,
    0x8a,0x48,0x98,0x48,0xad,0xff,0xcf,0x20, // 10
    0x1a,0xc8,0x68,0x68,0xba,0x8d,0xf8,0x07,
    0x0a,0x0a,0x0a,0x0a,0x8d,0x78,0x07,0x68, // 20
    0x68,0x68,0xa8,0x68,0x9a,0x09,0x04,0x48,
    0x28,0x98,0xac,0x78,0x07,0xae,0xf8,0x07, // 30
    0x29,0x7f,0x48,0x50,0x0e,0xb8,0xa5,0x36,
    0xd0,0x04,0xe4,0x37,0xf0,0x0a,0xa9,0x08, // 40
    0x85,0x38,0x38,0x90,0x16,0x4c,0x50,0xc9,
    0xa9,0x0b,0x85,0x36,0xa9,0x5e,0x9d,0xb8, // 50
    0x04,0xa9,0x0a,0x9d,0x38,0x04,0xa9,0x00,
    0x9d,0x38,0x05,0x68,0xc9,0x25,0xf0,0x5c, // 60
    0xc9,0x26,0xf0,0x58,0xc9,0x3c,0xf0,0x54,
    0xc9,0x3e,0xf0,0x50,0xc9,0x23,0xf0,0x4c, // 70
    0xc9,0x5e,0xf0,0x5a,0xc9,0x21,0xf0,0x4a,
    0xc9,0x2a,0xf0,0x52,0xa2,0x20,0xc9,0x2c, // 80
    0xf0,0x52,0xa2,0x28,0xc9,0x2e,0xf0,0x4c,
    0xa2,0x30,0xc9,0x2f,0xf0,0x46,0xae,0xf8, // 90
    0x07,0x48,0xbd,0xb8,0x04,0xc9,0x21,0xf0,
    0x41,0xc9,0x5e,0xf0,0x0e,0x68,0x29,0x1f, // A0
    0x0a,0x38,0xe9,0x01,0x9d,0x38,0x04,0xa9,
    0x5e,0xd0,0x23,0x68,0x38,0xe9,0x41,0x30, // B0
    0x20,0xc9,0x16,0x10,0x1c,0xaa,0xbd,0x8d,
    0xcb,0x4c,0x04,0xcb,0x9d,0x38,0x05,0x4c, // C0
    0x2f,0xc9,0xa9,0x20,0x20,0xb7,0xca,0xa9,
    0x08,0x20,0xb7,0xca,0xa9,0x21,0x9d,0xb8, // D0
    0x04,0x4c,0x2f,0xc9,0x8a,0x20,0xb7,0xca,
    0xd0,0xf7,0x68,0xc9,0x0d,0xf0,0x13,0xc9, // E0
    0x20,0xf0,0x44,0x29,0x0f,0x20,0xcf,0xca,
    0xf0,0x02,0xa9,0x0a,0x9d,0x38,0x07,0x18, // F0
    0x90,0x35,0x20,0xcf,0xca,0x7d,0x38,0x07,
    0x48,0xa9,0x09,0x9d,0x38,0x06,0x20,0xcf, // 00
    0xca,0x48,0xde,0x38,0x06,0xd0,0xf7,0xa9,
    0x0a,0x9d,0x38,0x06,0x68,0x20,0xcf,0xca,
    0xde,0x38,0x06,0xd0,0xf7,0xa9,0x10,0x20,
    0xb7,0xca,0xd0,0xb2,0xba,0x68,0x68,0x98,
    0x48,0x68,0x68,0xa9,0x8d,0x48,0x9a,0xae,
    0xf8,0x07,0xac,0x78,0x07,0xbd,0xb8,0x03,
    0xdd,0x38,0x07,0xd0,0x0c,0x1d,0x38,0x07,
    0xf0,0x07,0xc9,0x40,0xd0,0x03,0x99,0x80,
    0xc0,0x68,0xa8,0x68,0xaa,0x68,0x28,0x60,
    0x68,0xa9,0x18,0x20,0xb7,0xca,0xa9,0x08,
    0x20,0xb7,0xca,0xa9,0x09,0x9d,0x38,0x06,
    0x20,0xcf,0xca,0xc9,0x0a,0x30,0x02,0xa9,
    0x00,0x48,0xde,0x38,0x06,0xd0,0xf1,0x20,
    0xcf,0xca,0xc9,0x0d,0x30,0x02,0xa9,0x00,
    0x48,0xbd,0x38,0x05,0xf0,0x04,0xc9,0x23,
    0xd0,0x5e,0xa0,0x00,0x68,0xc9,0x0a,0x30,
    0x04,0xc8,0x38,0xe9,0x0a,0x48,0x98,0xa2,
    0x00,0x20,0xa6,0xca,0x68,0x20,0xa6,0xca,
    0xac,0xf8,0x07,0xb9,0x38,0x05,0xd0,0x2a,
    0xa9,0xaf,0x20,0xa8,0xca,0x68,0xa0,0x04,
    0x68,0x20,0xa6,0xca,0x68,0x20,0xa6,0xca,
    0x88,0xf0,0x07,0xa9,0x3b,0x20,0xa8,0xca,
    0xd0,0xee,0xa9,0xa0,0x8d,0x05,0x02,0xb9,
    0xf3,0xcb,0xf0,0x19,0x20,0xa8,0xca,0xc8,
    0xd0,0xf5,0xa9,0x00,0x48,0xa0,0x05,0x20,
    0xaf,0xca,0x68,0x20,0xa6,0xca,0x68,0x20,
    0xa6,0xca,0x88,0xd0,0xf2,0x4c,0x9a,0xca,
    0x68,0xaa,0x68,0x0a,0x0a,0xa8,0x8a,0x0a,
    0x0a,0x48,0xae,0xf8,0x07,0xbd,0x38,0x05,
    0xa2,0xa0,0xc9,0x3c,0xb0,0x02,0xa2,0xa2,
    0x8a,0xa2,0x00,0x20,0xa8,0xca,0xb9,0xa3,
    0xcb,0xc8,0x20,0xa8,0xca,0xc9,0xa0,0xd0,
    0xf5,0x68,0xa8,0xb9,0xbf,0xcb,0xc8,0x20,
    0xa8,0xca,0xc9,0xa0,0xd0,0xf5,0x68,0x20,
    0xa4,0xca,0x68,0x20,0xa6,0xca,0x20,0xb3,
    0xca,0xa0,0x03,0x68,0x20,0xa4,0xca,0xd0,
    0x03,0x20,0xa6,0xca,0x68,0x20,0xa6,0xca,
    0x88,0xf0,0x09,0xa9,0xba,0x20,0xa8,0xca,
    0x68,0x4c,0x29,0xca,0xac,0xf8,0x07,0xb9,
    0x38,0x05,0xc9,0x25,0xf0,0x04,0xc9,0x3e,
    0xd0,0x50,0xa0,0x41,0xad,0x0c,0x02,0xc9,
    0xa0,0xd0,0x02,0xa9,0x30,0x0a,0x0a,0x0a,
    0x0a,0x8d,0x20,0x02,0xad,0x0d,0x02,0x29,
    0x0f,0x0d,0x20,0x02,0xc9,0x12,0x30,0x02,
    0xa0,0x50,0xc9,0x00,0xd0,0x04,0xa9,0x12,
    0xd0,0x09,0xc9,0x13,0x30,0x16,0xf8,0x38,
    0xe9,0x12,0xd8,0xa2,0x0c,0x48,0x20,0xff,
    0xca,0x29,0x0f,0x20,0xa4,0xca,0x68,0x29,
    0x0f,0x20,0xa6,0xca,0xa2,0x14,0x20,0xb3,
    0xca,0x98,0x20,0xa8,0xca,0xa9,0x4d,0x20,
    0xa8,0xca,0x8a,0xa8,0xa9,0x8d,0x20,0xa8,
    0xca,0x4c,0x24,0xc9,0xf0,0x0d,0x09,0x30,
    0x09,0x80,0x9d,0x00,0x02,0xe8,0x60,0xa9,
    0xac,0xd0,0xf5,0xa9,0xa0,0xd0,0xf1,0x99,
    0x80,0xc0,0x09,0x04,0x99,0x80,0xc0,0x20,
    0xc7,0xca,0x49,0x04,0x99,0x80,0xc0,0x20,
    0xca,0xca,0x48,0x48,0x68,0x68,0x60,0x48,
    0xa9,0x04,0x9d,0xb8,0x06,0xa9,0x00,0x9d,
    0xb8,0x05,0xb9,0x80,0xc0,0x0a,0x7e,0xb8,
    0x05,0x68,0x48,0x29,0x01,0x99,0x80,0xc0,
    0x09,0x02,0x99,0x80,0xc0,0x49,0x02,0x99,
    0x80,0xc0,0x68,0x6a,0x48,0xde,0xb8,0x06,
    0xd0,0xe0,0x68,0xbd,0xb8,0x05,0x18,0x6a,
    0x6a,0x6a,0x6a,0x60,0x48,0xae,0xf8,0x07,
    0xbd,0x38,0x04,0x9d,0xb8,0x06,0x20,0x50,
    0xcb,0x68,0x48,0x20,0x4c,0xcb,0x68,0x48,
    0x49,0xf8,0x20,0x4c,0xcb,0xa2,0xa0,0x20,
    0x69,0xcb,0xa2,0xa0,0x20,0x69,0xcb,0xa0,
    0x18,0x20,0x60,0xcb,0xae,0xf8,0x07,0xde,
    0xb8,0x06,0xd0,0xda,0x68,0xa0,0xbc,0xca,
    0xd0,0xfd,0x88,0xd0,0xfa,0x4c,0x2f,0xc9,
    0x48,0x90,0x05,0x20,0x50,0xcb,0xf0,0x03,
    0x20,0x59,0xcb,0x68,0x0a,0xd0,0xf1,0x60,
    0xa2,0x50,0x20,0x69,0xcb,0xa0,0x28,0xd0,
    0x07,0xa2,0x18,0x20,0x69,0xcb,0xa0,0x44,
    0xa2,0x13,0xca,0xd0,0xfd,0x88,0xd0,0xf8,
    0x60,0xac,0x78,0x07,0xa9,0x20,0x99,0x80,
    0xc0,0xea,0xea,0xea,0x49,0x20,0x99,0x80,
    0xc0,0xea,0xea,0xea,0x49,0x20,0x99,0x80,
    0xc0,0xea,0xea,0xea,0x49,0x20,0x99,0x80,
    0xc0,0xca,0xd0,0xe0,0x60,0x64,0xe4,0x24,
    0xa4,0x14,0x94,0x54,0xd4,0x74,0xf4,0x34,
    0xb4,0x04,0x84,0x44,0xc4,0x2c,0x3c,0x5c,
    0x4c,0x1c,0x0c,0x53,0x55,0x4e,0x20,0x4d,
    0x4f,0x4e,0x20,0x54,0x55,0x45,0x20,0x57,
    0x45,0x44,0x20,0x54,0x48,0x55,0x20,0x46,
    0x52,0x49,0x20,0x53,0x41,0x54,0x20,0x45,
    0x52,0x52,0x20,0x4a,0x41,0x4e,0x20,0x46,
    0x45,0x42,0x20,0x4d,0x41,0x52,0x20,0x41,
    0x50,0x52,0x20,0x4d,0x41,0x59,0x20,0x4a,
    0x55,0x4e,0x20,0x4a,0x55,0x4c,0x20,0x41,
    0x55,0x47,0x20,0x53,0x45,0x50,0x20,0x4f,
    0x43,0x54,0x20,0x4e,0x4f,0x56,0x20,0x44,
    0x45,0x43,0x20,0xae,0xb0,0xb0,0xb0,0x00,
    0xae,0xb0,0xb0,0xb0,0x00,0xa0,0xa0,0xc1,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,
    0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff
];
