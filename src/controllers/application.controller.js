const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.apply = async (req, res) => {
  const { processId } = req.body;
  const userId = req.user.sub;

  const exists = await prisma.application.findUnique({
    where: {
      userId_processId: { userId, processId }
    }
  });

  if (exists) {
    return res.status(400).json({ error: "Usuário já inscrito" });
  }

  const application = await prisma.application.create({
    data: { userId, processId }
  });

  res.status(201).json(application);
};

exports.listByProcess = async (req, res) => {
  const apps = await prisma.application.findMany({
    where: { processId: req.params.processId },
    include: { user: true }
  });

  res.json(apps);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;

  const application = await prisma.application.update({
    where: { id: req.params.id },
    data: { status }
  });

  res.json(application);
};
