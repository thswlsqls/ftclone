const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const postSchema = mongoose.Schema(
  {
    writer: {
      type: Types.ObjectId,
      ref: 'User',
    },
    post_title: {
      type: Types.String,
      maxlength: 50,
    },
    post_content: {
      type: Types.String,
    },
    create_Date: {
      type: Types.Date,
    },
    read_count: {
      type: Types.Number,
      default: 0,
    },
    attached_file: {
      type: Types.String,
    },

    ////////////
    privacy: {
      type: Number,
    },
    filePath: {
      type: String,
    },
    category: String,
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    resizedFilePath: {
      type: String,
    },

    // 다중파일 업로드 기능 구현을 위해 추가한 필드들
    filePathsArr: {
      type: Types.Array,
    },
    durationsArr: {
      type: Types.Array,
    },
    resizedFilePathsArr: {
      type: Types.Array,
    },
    thumbnailsArr: {
      type: Types.Array,
    },
    mimetype: {
      type: Types.String,
    },
    mimetypesArr: {
      type: Types.Array,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = { Post };
