import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/views/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    // Tăng giá trị count của bài viết có slug tương ứng
    await prisma.views.update({
      where: { slug },
      data: { count: { increment: 1 } },
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
