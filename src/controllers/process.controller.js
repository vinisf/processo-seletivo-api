const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProcess = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  const process = await prisma.process.create({
    data: {
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate)
    }
  });

  res.status(201).json(process);
};

exports.listProcesses = async (_, res) => {
  const processes = await prisma.process.findMany();
  res.json(processes);
};

exports.getProcess = async (req, res) => {
  const process = await prisma.process.findUnique({
    where: { id: req.params.id }
  });

  if (!process) {
    return res.status(404).json({ error: "Processo não encontrado" });
  }

  res.json(process);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;

  const process = await prisma.process.update({
    where: { id: req.params.id },
    data: { status }
  });

  res.json(process);
};
